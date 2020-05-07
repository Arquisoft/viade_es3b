import React, { Component } from 'react';
import data from '@solid/query-ldflex';
import { FriendsPageContent } from './friends.component';
import { errorToaster } from '@utils';
import auth from 'solid-auth-client';
import FC from 'solid-file-client';
import { H2Format } from "../Map/map.style";
import ReactDOM from "react-dom";
import { FriendRoute } from './friends.style';
import Map from "../Map/map.container";
import Ruta from "../../components/Ruta/ruta";
const defaultProfilePhoto = 'img/icon/empty-profile.svg';
const reload = () => {
  window.location.reload();
};

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
export class FriendsComponent extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      friendsWebId: [],
      friendsPhotos: [],
      activeId: null
    };
  }

  handleClick(event, id) {
    this.setState({ activeId: id })
  }

  componentDidMount() {
    const { webId } = this.props;
    if (webId) {
      this.getFriends();
    }
  }

  componentDidUpdate(prevProps) {
    const { webId } = this.props;
    if (webId && webId !== prevProps.webId) {
      this.getFriends();
    }
  }

  getFriends = async () => {
    const { webId } = this.props;
    const friends = [];
    const friendsWebId = [];
    const friendsPhotos = [];

    let image;
    try {
      const user = data[webId];
      for await (const friend of user.friends) {
        friendsWebId.push(friend)
        const name = await data[friend].name;
        const imageLd = await data[friend].vcard_hasPhoto;
        friends.push(name.value);
        if (imageLd && imageLd.value) {
          image = imageLd.value;
        } else {
          image = defaultProfilePhoto;
        }
        friendsPhotos.push(image)
      }
      this.setState({ friends: friends, friendsWebId: friendsWebId, friendsPhotos: friendsPhotos });
    } catch (e) {
      errorToaster(e.message, 'Error');
    }
  };

  getFriendRoutes = async (event, friendWebId, index) => {
    event.preventDefault();
    const fc = new FC(auth, { enableLogging: true });
    const url = friendWebId.toString().split("profile/card#me")[0] + "public/viade";
    let friendsRoutes = [];
    //let rutasJson = [];
    //let rutas = [];

    let existe = await fc.itemExists(url + "/routes");
    if (!existe) {
      try {
        ReactDOM.render(<H2Format>No hay rutas</H2Format>, document.getElementById('routesList'));
      }
      catch (error) {
        return;
      }
    } else {
      let routes = await fc.readFolder(url + "/routes");
      if (routes.files.length === 0) {
        try {
          ReactDOM.render(<H2Format>No hay rutas</H2Format>, document.getElementById('routesList'));
        }
        catch (error) {
          return;
        }
      } else {
        for (let i = 0; i < routes.files.length; i++) {
          if (routes.files[i].name.includes('.json') || routes.files[i].name.includes('.jsonld')) {
            // eslint-disable-next-line
            fc.readFile(url + "/routes/" + routes.files[i].name).then((file) => {
              let routeFileName = routes.files[i].name.split('.json')[0];
              let ruta = new Ruta(JSON.parse(file), null, routeFileName);
              friendsRoutes.push(<FriendRoute>
                <div className="route-header" >
                  <div className="route-name" onClick={(event) => this.loadMapView(event, friendWebId.toString(), ruta.name)}>{ruta.name}</div>
                  <div className="route-info">{ruta.getDistance() + " km"}</div>
                </div>
                <div className="route-body">{ruta.description}</div>
              </FriendRoute>
              );
              if (i === routes.files.length - 1) {
                try {
                  ReactDOM.render(friendsRoutes, document.getElementById('routesList'));
                }
                catch (error) {
                  return;
                }
              }
            });
          }
        }
      }
    }
    this.handleClick(event, index);
  };

  loadMapView = async (event, user, name) => {
    event.preventDefault();
    ReactDOM.render(<Map {...{ user, name }}></Map>, document.getElementById('friends-wrapper'))

  }

  addFriend = async (event, friendWebId) => {
    event.preventDefault();
    const { webId } = this.props;
    try {
      const user = data[webId];
      if (await this.isWebIdValid(friendWebId) && friendWebId.localeCompare("") !== 0) {
        if (await this.friendAlreadyAdded(friendWebId)) {
          errorToaster('WebId ya pertenece a tus amigos', 'Error');
        } else {
          await user.knows.add(data[friendWebId]);
          await reload();
        }
      } else {
        errorToaster('WebId no válido', 'Error');
      }
    } catch (e) {
      errorToaster(e.message, 'Error');
    }
  };

  isWebIdValid = async (friendWebId) => {
    const fc = new FC(auth);
    let session = await auth.currentSession()
    if (!session) {
      session = await auth.login();
    }
    try {
      let op = async client => await client.itemExists(friendWebId);
      return await op(fc);
    } catch (e) {
    }
  };

  friendAlreadyAdded = async (friendWebId) => {
    const { webId } = this.props;
    const user = data[webId];

    for await (const friend of user.friends) {
      if (String(friend).localeCompare(String(friendWebId)) === 0) {
        return true;
      }
    }
    return false;
  };

  render() {
    const { friends, friendsWebId, friendsPhotos, activeId } = this.state;
    const { webId } = this.props;
    return (
      <FriendsPageContent {...{ friends, friendsWebId, friendsPhotos, webId, addFriend: this.addFriend, getFriendRoutes: this.getFriendRoutes, activeId }} />
    );
  }
}
