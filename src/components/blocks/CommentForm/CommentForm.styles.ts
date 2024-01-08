import styled, { css } from "styled-components";
import Button from "../../atoms/Button/Button";

const Form = styled.form`
  width: 790px;
  height: 120px;
  border: 1.5px solid rgba(182, 182, 182, .1);
  border-radius: 15px;
  background-color: ${({ theme }) => theme.commentFormColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3px 5px 0 5px;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    width: 85%;
    max-width: 800px;
    min-width: 290px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 95px;
  };
  @media screen and (max-width: 550px) {
    height: 92px;
  };
  @media screen and (max-width: 500px) {
    height: 85px;
  };
  @media screen and (max-width: 450px) {
    height: 82px;
  };
  @media screen and (max-width: 400px) {
    height: 78px;
  };
`

const NoAuthCover = styled.div<{theme: "light" | "dark"}>`
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme === "light" ? "rgb(54, 79, 107, .15)" : "rgba(0, 0, 0, .4)"};
`

const NoAuthText = styled.h2`
  color: ${({ theme }) => theme.noAuthTextColor};

  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 21px;
  };
  @media screen and (max-width: 550px) {
    font-size: 19px;
  };
  @media screen and (max-width: 500px) {
    font-size: 18px;
  };
  @media screen and (max-width: 450px) {
    font-size: 16px;
  };
  @media screen and (max-width: 400px) {
    font-size: 14px;
  };
`

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .5rem;
  width: 95%;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const CommentInput = styled.textarea<{commentform: "yes" | "no"}>`
  width: 93%;
  height: 60px;
  background-color: #FFF;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  resize: none;
  padding: 14px;
  box-sizing: border-box;
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};

  ${props => props.commentform === "yes" &&
    css`
      color: black;
    ` };
  
  &:focus {
    outline: none;
  };

  @media ${({ theme }) => theme.mediaQuery.small} {
    padding: 10px;
    height: 45px;
    font-size: 13px;
  };
  @media screen and (max-width: 500px) {
    padding: 9px;
    height: 40px;
    font-size: 12px;
  };
  @media screen and (max-width: 450px) {
    padding: 8px;
    font-size: 11px;
  };
`

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.writeButtonColor};
  color: #FFF;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 60px;
    height: 25px;
    font-size: 12px;
    border-radius: 8px;
  };
  @media screen and (max-width: 500px) {
    width: 55px;
    height: 23px;
    font-size: 11px;
    border-radius: 7px;
  };
  @media screen and (max-width: 450px) {
    width: 50px;
    height: 21px;
    font-size: 10px;
    border-radius: 6px;
  };
`

export { Form, NoAuthCover, NoAuthText, FormArea, InputWrapper, CommentInput, SubmitButton }