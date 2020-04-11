import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "video-react/dist/video-react.css";

export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding: 0px 15px 30px 0px;
`;

export const LI = styled.li`
    font-size: 1em;
      color: #083575;
      background:#8ed2d2;
      font-weight:bold;
      width: 75% !important; 
      margin:2px;
  `;

export const Column = styled.div`
        width: 25vw;
        min-width: 400 px !important; 
        float:right;
`;

export const Up = styled.div`
        height: 80vh;   
        width: 100vw;
        float:up;
        text-align: center;    
        background:#8ed2d2; 
`;

export const Down = styled.div`
        height: 30vh;      
        float:down;
        width: 100vw;
        text-align: center;    
        background:#8ed2d2; 
`;

export const MapaStyle = styled(Map)`
  width: 75% !important; 
  height: 80vh !important; 
  float: left;
`;

export const UploaderCard = styled.div`
  background-color: #fff;
  margin: 30px auto;
  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  padding: 5px 10px !important; //temporary fix to a style guide bug
  align-items: center;
  h3{
    padding: 0 30px;
    text-align: center;
    font-size: 1.2em;
  }
  h2{
    font-weight:bold;
  }

  button{
    font-size: 1.1em;
      color: #083575;
      background:#8ed2d2;
      font-weight:bold;
  }
  button:hover{
      background:#a4d1d1;
      color: #083575;
  }
`;

export const ScrollDiv  = styled.div`
  overflow-y: scroll;
  max-height: 38vh; 
`;
export const FormCard = styled.div`
  margin: 15px 0px;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 1em 0;
  border: 1px solid rgba(124, 77, 255, 0);
  transition: all .25s ease-in-out;
  height: auto;
 
`;

export const Button = styled.button`
    font-size: 1em;
      color: #083575;
      background:#8ed2d2;
      font-weight:bold;
      width: 75% !important; 
      margin:2px;
  }
  hover{
      background:#a4d1d1;
      color: #083575;
  }
  `;

  export const H2Format = styled.h2`
      text-align:center;
      font-size: 3rem;
`;

export const InformationSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding:  0px 0px  ;
`;


  //************* prueba */
export const DivPrueba = styled.div`
background:rgba(164, 209, 209,0.85);
display: flex;
justify-content: center;
align-items: center;
height: 100%;   
width: 100%;
        text-align: center;  
        mar   
`;

export const ImgPopupSytle = styled.img`
max-height: 95%; 
max-width: 95%; 

`






