import Map from './newRoute.componet'
import React from 'react';
import { MapSection, Left, Right, FormCard, ChooseButton,MultimediaCard,MultimediasCard } from './newRoute.style';
import { useTranslation } from 'react-i18next';


const NewRoute = (props) => {
    function updatePoints(point) {
        console.log("Bien");
        console.log(point);

    }
    const { t } = useTranslation();


    return (<MapSection>
        <Left>
            <Map {... { updatePoints }}></Map>
        </Left>
        <Right>
            <FormCard>
                <h1>Crea una nueva ruta</h1>
                <h2>Nombre</h2>
                <input ype="test" id="name" name="name" onChange={(e) => { console.log("Bueno") }} />
                <h3>Descripcion</h3>
                <input type="test" id="name" name="name" onChange={(e) => { console.log("Bueno") }} />
                
                <h2>Multimedia</h2>
                <MultimediasCard>
                <MultimediaCard>
                        <ChooseButton>
                            <div>
                                <h2>Seleccione fotos</h2>
                                <center>
                                    <input value={null} type="file" id="photo" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { console.log(e.target.files) }} />
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
                                    <input value={null} type="file" id="photo" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { console.log(e.target.files) }} />
                                    <label id="label-input" htmlFor="photo">
                                        <span>{t('uploader.chooseImages')}</span>
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


