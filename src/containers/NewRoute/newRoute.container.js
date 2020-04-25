import Map from './newRoute.componet'
import React, { useState } from 'react';
import { MapSection, Left, Right, FormCard, ChooseButton, MultimediaCard, MultimediasCard, ShareCard } from './newRoute.style';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewRoute = (props) => {
   
    function updatePoints(point) {
        setPoints(point);

    }
    const { t } = useTranslation();

    const checkValues = () =>{
        let error = false;

        error = checkString(name,"El nombre no puede estar vacio")? true : error;
        error = checkString(description,"La descripción no puede estar vacia")? true : error;
     
        console.log(points.length);
        if(points.length === 0){
            error = true;
            showErrorUploadFile("La ruta debe tener al menos un punto")
        }
            
    }

    const checkString = (value, message) =>{
        if(value === null){
            showErrorUploadFile(message);
            return true;
        }
        if(value.length === 0){
            showErrorUploadFile(message);
            return true;
        }
        return false;
    }

    const showErrorUploadFile = (name) => {
        toast.error(name, {
            delay: 1000,
            autoClose: false,
            position: toast.POSITION.TOP_CENTER
        });
    }
    
    const showSuccessUploadFile = (name) => {
        //https://github.com/fkhadra/react-toastify
        toast.success(name, {
            delay: 1000,
            autoClose: false,
            position: toast.POSITION.TOP_CENTER
        });
    }

    let publico = false;
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [points,setPoints] = useState([]);


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
                <ShareCard>
                    <div className="flex-container">
                    <h3 htmlFor="cbox1">Compartir</h3>
                        <input type="checkbox" id="cbox1" value="first_checkbox" onChange={ () => publico = !publico}></input>
                    </div>
                </ShareCard>

                <br></br>
                <button onClick={checkValues}>Crear</button>
            </FormCard>
        </Right>
    </MapSection>)
}

export default NewRoute;


