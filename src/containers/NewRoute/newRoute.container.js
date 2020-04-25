import Map from './newRoute.componet'
import React, { useState } from 'react';
import { MapSection, Left, Right, FormCard, ChooseButton, MultimediaCard, MultimediasCard } from './newRoute.style';
import { useTranslation } from 'react-i18next';


const NewRoute = (props) => {
    function updatePoints(point) {
        console.log("Bien");
        console.log(point);

    }
    const { t } = useTranslation();


    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);


    return (<MapSection>
        <Left>
            <Map {... { updatePoints }}></Map>
        </Left>
        <Right>
            <FormCard>
                <h1>Crea una nueva ruta</h1>
                <h2>Nombre</h2>
                <input ype="test" id="name" name="name" onChange={(e) => { setName(e.target.value) }} />
                <h3>Descripcion</h3>
                <input type="test" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} />

                <h2>Multimedia</h2>
                <MultimediasCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                                <h2>Seleccione fotos</h2>
                                <center>
									<input value={null} type="file" id="photo" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { setImage(e.target.files) }} />
									<label id="label-input" htmlFor="photo">
										<span>{t('uploader.chooseImages')}</span>
									</label>
								</center>
                            </div>
                        </ChooseButton>
                    </MultimediaCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                                 <h2>Seleccione videos</h2>
                                <center>
                                    <input value={null} type="file" id="video" name="video" accept=".mp4,.avg" multiple={true} onChange={(e) => setVideo(e.target.files)} />
                                    <label id="video-input" htmlFor="video">
                                        <span>{t('uploader.chooseVideos')}</span>
                                    </label>
                                </center>
                            </div>
                        </ChooseButton>
                    </MultimediaCard>
                </MultimediasCard>
                <br></br>
                <button>Crear</button>
            </FormCard>
        </Right>
    </MapSection>)
}

export default NewRoute;


