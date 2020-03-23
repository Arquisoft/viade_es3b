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
import './addFriendModal.css';

/**
 * Friends Page UI component, containing the styled components for the Friends Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const FriendsPageContent = props => {
  const { webId, image, updatePhoto, name } = props;
  const { t } = useTranslation();
  const limit = 2100000;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
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
                className="modal-content"
                overlayClassName="modal"
            >
              <div className="modal-header">
                <h2 className="modalTitle">Please enter WebID:</h2>
                <button onClick={closeModal} className="close">
                  <span className="icon">
                    <img src="/img/viade-icons/close.svg" alt="Close" />
                  </span>
                </button>
              </div>
                <form className="modal-body">
                  <input type="text" placeholder="https://alice.solid.community/profile/card#me"/>
                  <button onClick={closeModal} className="send">
                    <span className="icon">
                      <img src="/img/viade-icons/send.svg" alt="Send" />
                    </span>
                  </button>
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
