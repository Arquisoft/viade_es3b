import styled from 'styled-components';
import { Map, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background-image: url('/img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  padding: 60px 0;
`;


export const Column = styled.div`
        width: 25vw;
`;

export const Up = styled.div`
        height: 300px;   
        float:up;
       
`;

export const Down = styled.div`
        height: 300px;      
        float:down;
`;

export const Center = styled.div`
        width: 50vw;
        float:center;
        padding:10px;
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
    width: 100vw;
    height: 100vh;
    margin:0px;
        padding:3px;
  `;


  export const UlStyle = styled.ul`
        margin-left:15%;
  `;

export const LiStyle = styled.li`
        
        margin:0px;
        padding:3px;
        max-width: 80%;
        border:1px solid#CCCCCC;
        text-align:center;
        border-radius: 2px;
        background: #DED8D0;
        :hover {
                cursor: pointer;
                background: #B8B0A5;
        }   
`;

        export const PStyle = styled.p`
        margin:10%;
  
`;



