import React from 'react';
import { Uploader } from '@inrupt/solid-react-components';
import {useTranslation } from 'react-i18next';
import {
  WelcomeWrapper,
  WelcomeCard,
  WelcomeLogo,
  WelcomeProfile,
  WelcomeDetail,
  WelcomeName,
  ImageWrapper,
  HeaderCard
} from './welcome.style';
import { ImageProfile } from '@components';
import { errorToaster } from '@utils';

/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const WelcomePageContent = props => {
  const { webId, image, updatePhoto, name } = props;
  const { t } = useTranslation();
  const limit = 2100000;
  return (
    <WelcomeWrapper data-testid="welcome-wrapper">
      
      
      <WelcomeCard className="card">
      <HeaderCard>
        <h1>VIADE ES3B</h1>
      </HeaderCard>
        <WelcomeLogo data-testid="welcome-logo">
          <img src="/img/logo-viade-mediano.png" alt="Viade" />
        </WelcomeLogo>

        <WelcomeProfile data-testid="welcome-profile">
          <h3>
            {t('welcome.welcome')}, <WelcomeName>{name}</WelcomeName>
          </h3>
          <ImageWrapper>
            <Uploader
              {...{
                fileBase: webId && webId.split('/card')[0],
                limitFiles: 1,
                limitSize: limit,
                accept: 'jpg,jpeg,png',
                errorsText: {
                  sizeLimit: t('welcome.errors.sizeLimit', {
                    limit: `${limit / 1000000}Mbs`
                  }),
                  unsupported: t('welcome.errors.unsupported'),
                  maximumFiles: t('welcome.errors.maximumFiles')
                },
                onError: error => {
                  if (error && error.statusText) {
                    errorToaster(error.statusText, t('welcome.errorTitle'));
                  }
                },
                onComplete: uploadedFiles => {
                  updatePhoto(
                    uploadedFiles[uploadedFiles.length - 1].uri,
                    t('welcome.uploadSuccess'),
                    t('welcome.successTitle')
                  );
                },
                render: props => (
                  <ImageProfile
                    {...{
                      ...props,
                      webId,
                      photo: image,
                      text: t('welcome.upload'),
                      uploadingText: t('welcome.uploadingText')
                    }}
                  />
                )
              }}
            />
          </ImageWrapper>
        </WelcomeProfile>
      </WelcomeCard>
      <WelcomeCard className="card">
        <WelcomeDetail data-testid="welcome-detail">
          <h3>{t('welcome.whatIsViade')}</h3>
          <p>{t('welcome.viadeIs')}</p>
          <p>{t('welcome.realized')}</p>
        <ul>
          <li>Daniel de Lera</li>
          <li>Federico Cuervo</li>
          <li>Ismael Cadenas</li>
          <li>Alfonso Lozana</li>
          <li>Ignacio Bermejo</li>
          <li>Jorge Iturrioz</li>
        </ul>
        </WelcomeDetail>
      </WelcomeCard>
    </WelcomeWrapper>
    
  );
};

/*class Introduccion extends React.Component {
  render() {
    return (
      <div className="Introduccion">
      <p>Aplicación de visualización de rutas descentralizada.</p>
      <p>Realizada por:</p>
      <ul>
        <li>Daniel de Lera</li>
        <li>Federico Cuervo</li>
        <li>Ismael Cadenas</li>
        <li>Alfonso Lozana</li>
        <li>Ignacio Bermejo</li>
        <li>Jorge Iturrioz</li>
      </ul>
      </div>
    );
  }
}*/