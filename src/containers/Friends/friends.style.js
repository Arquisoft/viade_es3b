import styled from 'styled-components';
//import { media } from '../../utils';

export const FriendsWrapper = styled.section`
  width: 100%;
  background:#a4d1d1;
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
  width: 100%;
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
  justify-content:flex-start !important;
  flex-wrap: nowrap !important;
    
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    min-height: 200px;
    max-height: 3000px;
    padding: 0  !important;
  }
`;

export const FriendsRoutesCard = styled.div`
  background-color: #fff;
  margin: 30px 0px 30px 40px;

  padding: 0px !important;
  min-height: 600px;
  justify-content:flex-start !important;

  @media screen and (max-width: 1000px) {
    margin: 30px auto;
  }
`;

export const FriendsRoutesList = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FriendRoute = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px 30px;
  margin: 0px 0px 10px;
  &:hover {
      background-color: #f4f4f4 !important;
  }
`;

export const FriendsCardTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
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
    &:hover {
      background: #f4f4f4 !important;
    }
  }
`;

export const FriendsList = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 30px 0px 50px;
  @media screen and (max-width: 1000px) {
    overflow: auto;
    padding-left: 33%;
  }
`;


export const FriendProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: max-content;
  margin: 0px 0px 10px;
  &:hover {
      font-weight: bold;
      cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-size: cover;
  overflow: hidden;
  visibility: visible;
  display: block;
 `;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const FriendName = styled.span`
  overflow-wrap: break-word;
  word-break: break-word;
  padding: 12px 0px 0px 10px;
`;
