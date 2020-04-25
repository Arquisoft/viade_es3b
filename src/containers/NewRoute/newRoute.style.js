import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import "video-react/dist/video-react.css";

export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding: 30px;
`;

export const Left = styled.div`
  height: 80vh;   
  width: 60vw;
  float:up;
  text-align: center;    
  background:#a4d1d1; 
  float: left;
`;

export const Right = styled.div`
  height: 80vh;   
  width: 40vw;
  float:up;
  text-align: center;    
  background:#a4d1d1; 
  float: right;
`;

export const MultimediaCard = styled.div`
  margin: 0px 30px 0px 30px;
`;

export const MultimediasCard = styled.div`
  display: flex;
  flex-direction: row;
`;


export const FormCard = styled.div`
  margin: 0px 70px 50px 20px;
  background-color: #fff;
  padding: 30px 15px 30px 15px;
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
  
  input{
    width: 80%;
    height: 40px;
  }
`;

export const ChooseButton = styled.div`
  input{
    width: 0.1px;
    height:0.1x;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    }
  label {
    border: 1px solid #DAE0E6;
    border-radius: 4px;
    font-size: 12.8px;
    font-weight: bold;
    color: #083575;
    background-color: #8ed2d2;
    display: inline-block;
    transition: all .5s;
    cursor: pointer;
    padding: 6.4px 12.8px;
    width: fit-content;
    text-align: center;
    }
    label:hover {
      color: #083575;
      background: #a4d1d1;
      border-color: #449DF5;
      transition: 0.25s all ease-in-out;
    }
`;

export const ShareCard = styled.div`
  input[type="checkbox"]{
    margin: 0px !important;
    /* Doble-tamaño Checkboxes */
    -ms-transform: scale(1); /* IE */
    -moz-transform: scale(1); /* FF */
    -webkit-transform: scale(1); /* Safari y Chrome */
    -o-transform: scale(1); /* Opera */
  }


`;








