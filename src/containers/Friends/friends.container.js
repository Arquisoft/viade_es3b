import React, {Component} from 'react';
import data from '@solid/query-ldflex';
import {FriendsPageContent} from './friends.component';
import {errorToaster} from '@utils';
import auth from 'solid-auth-client';
import FC from 'solid-file-client';

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
      friendsPhotos: []
    };
  }

  componentDidMount() {
    const { webId } = this.props;
    if (webId){
      this.getFriends();
    }
  }

  componentDidUpdate(prevProps) {
    const { webId } = this.props;
    if (webId && webId !== prevProps.webId){
      this.getFriends();
    }
  }

  getFriends = async () => {
    const { webId } = this.props;
    const friends=[];
    const friendsPhotos=[];

    let image;
    try {
      const user = data[webId];
      for await (const friend of user.friends) {
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
      this.setState({friends: friends, friendsPhotos: friendsPhotos});
    } catch (e) {
      errorToaster(e.message, 'Error');
    }
  };

  getFriendsTrails = async () => {
    const { webId } = this.props;
    const friendsTrails=[];

    try {
      const user = data[webId];
      for await (const friend of user.friends) {
        const name = await data[friend].name;
        const imageLd = await data[friend].vcard_hasPhoto;
        friendsTrails.push(name.value);
      }
      this.setState({friendsTrails: friendsTrails});
    } catch (e) {
      errorToaster(e.message, 'Error');
    }
  };

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
      } else  {
        errorToaster('WebId no válido', 'Error');
      }
    } catch (e) {
      errorToaster(e.message, 'Error');
    }
  };

  isWebIdValid = async(friendWebId) => {
    const fc = new FC(auth);
    let session = await auth.currentSession()
    if (!session) {
      session = await auth.login();
    }
    try {
      let op = async client => await client.itemExists(friendWebId);
      return await op(fc);
    }catch (e) {
    }
  };

  friendAlreadyAdded = async (friendWebId) => {
    const { webId } = this.props;
    const user = data[webId];

    for await (const friend of user.friends) {
      if (String(friend).localeCompare(String(friendWebId)) === 0) {
        console.log(friend.toString());
        return true;
      }
    }
    return false;
  };

  render() {
    const { friends, friendsPhotos } = this.state;
    const { webId } = this.props;
    return (
      <FriendsPageContent {...{ friends, friendsPhotos, webId, addFriend: this.addFriend }} />
    );
  }
}
