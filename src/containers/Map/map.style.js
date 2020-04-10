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

export const InformationSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding:  0px 0px  ;
`;


export const DefaultSection = styled.section`
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding: 0px 0px;
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
`;

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

export const Down = styled.div`
        height: 30vh;      
        float:down;
`;



export const H2Format = styled.h2`
      text-align:center;
      font-size: 3rem;
`;

export const H3Format = styled.h3`
      text-align:center;
      font-size: 2rem;
`;

export const MapaStyle = styled(Map)`
  width: 75% !important; 
  height: 80vh !important; 
  float: left;
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

export const LiStyle = styled.li`
      font-size: 0.9em;
      color: #083575;
      background:#8ed2d2;
        margin:0px;
        padding:3px;
        max-width: 80%;
        border:1px solid#CCCCCC;
        text-align:center;
        border-radius: 2px;
        :hover {
                cursor: pointer;
                background: #B8B0A5;
                background:#a4d1d1;
                color: #083575;
        }   
`;

export const PStyle = styled.p`
margin:10%;
`;

export const ImgSytle = styled.img`
max-width: 640px !important; 
max-height: 360px !important; 
`
export const ImgPopupSytle = styled.img`
max-height: 95%; 
max-width: 95%; 

`
export const H1FormatPopup = styled.h1`
      text-align:center;
      font-size: 1rem;
`;

export const ButtonStyled = styled.button`
  border: none;
  background: white;
  width: 10%; 
  margin: 15px;
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
`;





