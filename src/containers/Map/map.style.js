import styled from 'styled-components';
import { Map, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#E7E7E7;
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
  `;


export const MarkerStyle = styled(Marker)`
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
        iconAnchor:   [17, 46],
        popupAnchor:  [0, -46]
  `;

