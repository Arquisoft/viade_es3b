import styled from 'styled-components';
import { media } from '../../utils';

export const FriendsWrapper = styled.section`
  width: 100%;
  background:#E7E7E7;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  

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

export const FriendsContainer = styled.section`
  max-width: 80% !important;
  display: flex;
  flex-direction: row !important;
  align-items:flex-start;
  align-content:flex-start;
  @media screen and (max-width: 1000px) {
    flex-direction: column !important;
  }
`;

export const FriendsCard = styled.div`
  background-color: #fff;
  margin: 30px auto;
  
  width: 40% !important;
  min-height: 500px;
  padding: 0 0 50px !important;
  
  justify-content: flex-start !important;
  
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    min-height: 300px;
  }
`;

export const FriendsTrailsCard = styled.div`
  background-color: #fff;
  margin: 30px 0px 30px 40px;

  padding: 0 0 50px !important;
  
  justify-content: flex-start !important;

  @media screen and (max-width: 1000px) {
    margin: 30px auto;
  }
`;

export const FriendsCardTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(8, 53, 117, 0.1);
  h4 {
    margin: 0px;
    padding: 15px;
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }
  button {
    background: white !important;
    border: none !important;
    border-radius: 0 !important;
    border-left: 1px solid rgba(8, 53, 117, 0.1) !important;
    transition: all 0.3s ease-in !important;
    &:hover {
      background: rgba(8, 53, 117, 0.1) !important;
    }
  }
`;

export const FriendsLogo = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
`;

export const FriendsProfile = styled.div`
  height: 100%;
  text-align: center;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h1,
  img {
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }

  ${media.tablet`
    width: 50%;
    &:after {
      display: block;
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      background-color:#D0D0D0;
      top:0;
    }
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 0px;
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : '#cccccc')};
  background-size: cover;
  border-radius: 50%;
  width: 128px;
  height: 128px;
`;

export const FriendsDetail = styled.div`
  padding: 1rem 3.5rem;

  p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;

export const FriendsName = styled.span`
  overflow-wrap: break-word;
  word-break: break-word;
`;
