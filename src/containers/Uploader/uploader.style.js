import styled from 'styled-components';

export const UploaderWrapper = styled.div`
    width: 100%;
    background-color: #a4d1d1;
    padding: 50px 0;
`;

export const UploaderCard = styled.div`
  background-color: #fff;
  margin: 30px auto;
  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug
  align-items: center;
  h2{
    padding: 0 30px;
    text-align: center;
  }
`;

export const FileButton = styled.div`
  padding: 30px;
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

export const UploadButton = styled.div`
    display: inline-block;
    height: 100%;
    text-align: center;
    position: relative;
    
    button{
      font-size: 1.2em;
        color: #083575;
        background:#8ed2d2;
        font-weight:bold;
    }
    button:hover{
        background:#a4d1d1;
        color: #083575;
    }
`;

export const FileNames = styled.div`
    h3{
      display: none;
    }
`;

export const FilesContainer = styled.div`
    display:none;
    padding: 10px 30px;
    border: 2px solid #a4d1d1;
    border-radius: 4px;
    width: 100%;
    background-color: #a4d1d1;
    input,label{
      margin:10px;
      @media screen and (max-width: 538px) {
        margin: 0px;
      }
      @media screen and (max-width: 400px) {
        margin: 2px 0px;
      }
    }
    div#file-container{
      margin: 0 0 10px 0;
    }
`;
export const FormCard = styled.div`

  margin: 10px;
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

export const MultimediaCard = styled.div`

  margin: 30px;
`;

export const MultimediasCard = styled.div`
  display: flex;
  flex-direction: row;
`;
