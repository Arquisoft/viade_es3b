import styled from 'styled-components';

export const UploaderWrapper = styled.div`
    width: 100%;
    height: 90%;
  background: #a4d1d1;
  background-repeat: repeat;
  padding: 50px 0;
  h3 {
    color: #666666;
    span {
      font-weight: bold;
    }
    a {
      font-size: 1.9rem;
    }
  }
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

export const SelectCard = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
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
  @media screen and (max-width: 541px) {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 508px) {
    width: 80%;
    height: 80%;
  }
  @media screen and (max-width: 475px) {
    width: 70%;
    height: 70%;
  }
  @media screen and (max-width: 400px) {
    width: 60%;
    height: 60%;
  }
  @media screen and (max-width: 345px) {
    width: 50%;
    height: 50%;
  } 
  @media screen and (max-width: 300px) {
    width: 40%;
    height: 40%;
  }
    
`;

export const ShareCard = styled.div`

  margin: 10px;
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

    

  
  .flex-container {
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  

  input[type="checkbox"]{
    margin: 0px !important;
    /* Doble-tamaño Checkboxes */
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari y Chrome */
    -o-transform: scale(2); /* Opera */
  }

  h3{
    margin-left: 30%;
  }
  @media screen and (max-width: 541px) {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 508px) {
    width: 80%;
    height: 80%;
  }
  @media screen and (max-width: 475px) {
    width: 70%;
    height: 70%;
  }
  @media screen and (max-width: 400px) {
    width: 60%;
    height: 60%;
  }
  @media screen and (max-width: 345px) {
    width: 50%;
    height: 50%;
  } 
  @media screen and (max-width: 300px) {
    width: 40%;
    height: 40%;
  }
`;

export const MultimediaCard = styled.div`
  margin: 30px;
  ul{
    margin 5px;
  }
  h3{
    display: none;
    
  }
  #file-container-photo, #file-container-video{
    margin-top: 10px;
    overflow: auto;
    height: 20%;
  }
`;

export const MultimediasCard = styled.div`
  display: flex;
  flex-direction: row;
`;
