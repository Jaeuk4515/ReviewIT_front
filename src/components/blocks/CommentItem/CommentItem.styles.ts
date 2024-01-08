import styled from "styled-components";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { DeleteIcon } from "../../pages/ReviewDetail/ReviewDetail.styles";

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  padding: 16px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.commentColor};
  border-radius: 15px;
  position: relative;

  @media ${({ theme }) => theme.mediaQuery.small} {
    min-height: 85px;
    padding: 12px 10px;
  };
  @media screen and (max-width: 500px) {
    min-height: 80px;
    padding: 11px 10px;
  };
  @media screen and (max-width: 450px) {
    min-height: 74px;
    padding: 9px 9px;
  };
  @media screen and (max-width: 400px) {
    min-height: 68px;
    padding: 10px 8px;
  };
`

const UserInfoArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-left: 5px;

  @media screen and (max-width: 500px) {
    gap: .6rem;
  };
`

const Profile = styled(UserProfile)`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 23px;
    height: 23px;
  };
  @media screen and (max-width: 500px) {
    width: 21px;
    height: 21px;
  };
  @media screen and (max-width: 450px) {
    width: 19px;
    height: 19px;
  };
  @media screen and (max-width: 400px) {
    width: 17px;
    height: 17px;
  };
`

const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 14px;
  };
  @media screen and (max-width: 500px) {
    font-size: 13px;
  };
  @media screen and (max-width: 450px) {
    font-size: 12px;
  };
  @media screen and (max-width: 400px) {
    font-size: 11px;
  };
`

const WritedTime = styled.span`
  color: #929292;
  padding-left: 10px;
  font-size: 14px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 10px;
  };
  @media screen and (max-width: 500px) {
    font-size: 9px;
    padding-left: 3px;
  };
  @media screen and (max-width: 450px) {
    font-size: 8px;
  };
  @media screen and (max-width: 400px) {
    font-size: 7px;
  };
`

const CommentText = styled.p`
  margin: 12px 0 0 0;
  padding: 0 10px;
  width: 97%;
  height: auto;
  display: flex;
  align-items: center;
  line-height: 23px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 13px;
    margin: 8px 0 0 0;
  };
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 7px 0 0 0;
  };
  @media screen and (max-width: 450px) {
    font-size: 11px;
    margin: 6px 0 0 0;
  };
  @media screen and (max-width: 400px) {
    font-size: 10px;
  };
`

const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px; right: 24px;
  opacity: .5;

  &:hover {
    opacity: .3;
  };

  @media screen and (max-width: 800px) {
    width: 18px;
    height: 18px;
    top: 16px; right: 20px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 15px;
    height: 15px;
    top: 14px; right: 18px;
  };
  @media screen and (max-width: 800px) {
    width: 13px;
    height: 13px;
    top: 12px; right: 16px;
  };
`

export { CommentArea, UserInfoArea, Profile, UserName, WritedTime, CommentText, DeleteButton }