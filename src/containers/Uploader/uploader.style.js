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
    border: 1px solid #9da2a7;
    -webkit-border-radius:2px;
    -moz-border-radius: 9px;
    background-color: #e9ecef;
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
        width: 10%;
        @media screen and (max-width: 992px) {
            width: initial;
          }
    }
    button:hover{
        background:#a4d1d1;
        color: #083575;
    }
`;