import styled from 'styled-components';

export const Image = styled.div`
  @media screen and (min-width: 992px) {
    background-image: url(${props => props.image});
  }
  @media screen and (max-width: 992px) {
    background-color: #8ed2d2;
  }
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0;
`;