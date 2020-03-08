import styled from 'styled-components';


export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background-image: url('/img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  padding: 60px 0;
`;

export const MapContainer = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  max-width: 900px;
  margin: 0 20px;
  width: 100%;
  flex: 1 0 auto;
`;

export const Button = styled.button`
  max-width: 128px;
  min-width:100px;
  display: inline-block;

  &:first-child {
    margin-right: 10px;
  }
`;
export const Right = styled.div`
        height:100%;
        background-color:#FFF;
        float:right;
        width:25%;
`;

export const Up = styled.div`
        height:50%;
        background-color:#FFF;
        float:up;
       
`;

export const Down = styled.div`
        height:50%;
        background-color:#FFF;
        float:down;
`;

export const Left = styled.div`
        height:100%;
        background-color:#FFF;
        float:left;
        width:25%;
`;

export const Center = styled.div`
        height:100%;
        background-color:#FFF;
        float:center;
        width:50%;
`;

export const H2Format = styled.h2`
      text-align:center;
`;

export const H3Format = styled.h3`
      text-align:center;
`;

export const imgFormat = styled.div`
height:100px;
float:center;
width:100px;
`;


