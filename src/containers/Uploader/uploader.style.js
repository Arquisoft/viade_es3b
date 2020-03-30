import styled from 'styled-components';

export const UploaderWrapper = styled.div`
    width: 100%;
    background-color: #a4d1d1;
    padding: 50px 0;
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

export const FileButton = styled.div`
  padding: 30px;
`;

export const ChooseButton = styled.div`
  margin: 0 200px 20px 200px;
  @media screen and (max-width: 992px) {
    margin: 0 0 20px 0;
  }
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
        color: #083575;
        background:#8ed2d2;
        font-weight:bold;
    }
    button:hover{
        background:#a4d1d1;
        color: #083575;
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



