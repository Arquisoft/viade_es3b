import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "video-react/dist/video-react.css";

export const MapWrapper = styled.div`
  width: 100%;
  background:#a4d1d1;
  padding: 0px 0;
  display: flex;
  align-items:center;
  align-content:center;
  justify-content: center;
  justify-content: center;
  flex-direction: column;
`;



export const CommentContainer = styled.div`
  padding: 5px 5px 0px 5px;
  width: 100%;
  max-width: 100% !important;
  display: flex;
  flex-direction: row !important;
  align-items:center;
  align-content:center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column !important;
  }
`;

export const MapContainerr = styled.div`

  padding: 5px;
  width: 100%;
  max-width: 100% !important;
  display: flex;
  flex-direction: row !important;
  align-items:center;
  align-content:center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column !important;
  }
`;
export const Left = styled.div`
  margin: 5px;
  background-color: #fff;
  width: 40% !important;
  min-height: 600px;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    min-height: 200px;
    max-height: 3000px;
    padding: 0  !important;
  }
`;
export const RoutesCard = styled.div`
  margin: 5px;
  background-color: #fff;
  width: 20% !important;
  min-height: 600px;
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    min-height: 200px;
    max-height: 3000px;
    padding: 0  !important;
  }
`;
export const Right = styled.div`
  background-color: #fff;
  padding: 0px !important;
  min-height: 600px;
  margin: 5px;
  @media screen and (max-width: 1000px) {
    margin: 30px auto;
  }
`;

export const CommentWrapper = styled.div`
background-color: #fff;
padding: 0px !important;
margin: 5px;
@media screen and (max-width: 1000px) {
  margin: 30px auto;
}
`;
export const Down = styled.div`
       
`;

export const MapaStyle = styled(Map)`
min-height: 600px;
@media screen and (max-width: 1000px) {
  width: 100% !important;
  min-height: 200px;
  max-height: 3000px;
  padding: 0  !important;
}
`;

export const MapCard = styled.div`
  width: 100%;
  
`;


export const CommentCard = styled.div`
  background-color: #fff;
  width:90%;
  margin: auto;
  //Overriding the style guide card flexbox settings
  padding: 30px 0px 30px 0px;
  h1{
    text-align: center;
  }
    input{
  }
  button{font-size: 1em;
        color: #083575;
        background:#8ed2d2;
        font-weight:bold;
    }
    hover{
        background:#a4d1d1;
        color: #083575;
    }
  }
  p{
    font-size: 1em;
    color: #083575;
    background:rgba(164, 209, 209,0.4);
    width: 90% !important; 
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #a4d1d1; 
    border-radius: 6px;
    padding: 5px 30px 15px 30px;
    h1{
      font-size: 0.8em;
      text-align: right;
      font-weight: bold;
    }
    
  }

  `;

export const ScrollDiv = styled.div`
    
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

export const ButtonShare = styled.button`
  color: #fff !important;
    background: #406cc8 !important;
    }disabled{
      background:#fff !important;
      color: #406cc8 !important;
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

`;


export const ButtonsCard = styled.section`

  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  border: 1px solid rgba(124, 77, 255, 0);
  transition: all .25s ease-in-out;
  background-color: white;
  padding: 75px 150px;
  @media screen and (max-width: 980px) {
    padding: 10px;
  }
  
  button{
    font-size: 1.1em;
    color: #083575;
    background:#8ed2d2;
    font-weight:bold;
    margin: 10px 5px 10px 5px;
    width: 100%;
    @media screen and (max-width: 980px) {
      width: inherit;
    }
  }
  button:hover{
    background:#a4d1d1;
    color: #083575;
  }
`;





