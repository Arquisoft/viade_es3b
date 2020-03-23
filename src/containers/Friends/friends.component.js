import React from 'react';
import { Uploader } from '@inrupt/solid-react-components';
import { Trans, useTranslation } from 'react-i18next';
import {
  FriendsWrapper,
  FriendsCard,
  FriendsLogo,
  FriendsProfile,
  FriendsDetail,
  FriendsName,
  ImageWrapper,
  FriendsContainer,
  FriendsTrailsCard,
  FriendsCardTitle
} from './friends.style';
import { ImageProfile } from '@components';
import { errorToaster } from '@utils';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

/**
 * Friends Page UI component, containing the styled components for the Friends Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const FriendsPageContent = props => {
  const { webId, image, updatePhoto, name } = props;
  const { t } = useTranslation();
  const limit = 2100000;
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  let subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <FriendsWrapper data-testid="friends-wrapper">
      <FriendsContainer data-testid="friends-container">
        <FriendsCard className="card">
          <FriendsCardTitle>
            <h4>{t('friends.title')}</h4>
            <button onClick={openModal}>
              <span className="icon">
                <img src="/img/viade-icons/person_add.svg" alt="Add Friend" />
              </span>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

              <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </FriendsCardTitle>
        </FriendsCard>
        <FriendsTrailsCard className="card">
          <FriendsCardTitle>
            <h4>{t('friends.trails.title')}</h4>
          </FriendsCardTitle>
        </FriendsTrailsCard>
      </FriendsContainer>
    </FriendsWrapper>
  );
};
