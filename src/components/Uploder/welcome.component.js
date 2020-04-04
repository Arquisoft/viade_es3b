import React from 'react';
import { Uploader } from '@inrupt/solid-react-components';
import { useTranslation } from 'react-i18next';
import {
  WelcomeWrapper,
  WelcomeCard,
  WelcomeLogo,
  WelcomeProfile,
  WelcomeName,
  ImageWrapper,
  HeaderCard
} from './welcome.style';
import { ImageProfile } from '@components';
import { errorToaster } from '@utils';


var url;

export function prepararLoadFotos(){

  const auth = require('solid-auth-client');
  auth.trackSession(session => {
    if (!session) {
      return;
    }
    let webId = session.webId;
    let urlRoute = webId.split("/profile/card#me")[0];
    urlRoute = urlRoute.concat("/public/myRoutes/");
    
    guardarValor(urlRoute);

  })
  setTimeout(() => {console.log(url)}, 1000);
}

function guardarValor(a){
  url = a;
}


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
            <h1>Subir imagenes</h1>
          </HeaderCard>
          <WelcomeProfile data-testid="welcome-profile">
            <ImageWrapper>
              <Uploader
                {...{
                  fileBase: url,
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
      </WelcomeWrapper>

    );
              
  };