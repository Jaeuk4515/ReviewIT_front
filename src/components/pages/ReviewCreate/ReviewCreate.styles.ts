import styled from "styled-components";
import { HomePage } from "../Home/Home.styles";
import { Img } from "../../atoms/Category/Category.styles";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";

const ReviewCreatePage = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  gap: 6rem;
`

const ReviewInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  min-width: 800px;
`

const SubArea = styled(ReviewInfoArea)`
  flex-direction: column;
  width: 45%;
  min-width: 320px;
  height: 400px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`

const SelectBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  padding-left: 15px;
  font-size: 17px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`

const Seleted = styled.div`
  width: 90%;
  height: 100%;
  border-right: 1.5px solid rgba(0, 0, 0, .1);
  display: flex;
  align-items: center;
`

const SelectedValue = styled.div`

`

const Arrow = styled(Img)`
  width: 15%;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`

const OptionBox = styled.div<{on: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${props => props.on ? "1.5px solid rgba(0, 0, 0, .1)" : 0};
  border-radius: 10px;
  height: ${props => props.on ? "143px" : 0};
  overflow-y: hidden;
  transition: .2s;
  position: absolute;
  top: 40px; left: -1.5px;
  z-index: 10;
  background-color: white;
`

const Option = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  box-sizing: border-box;

  &:hover {
    background-color: #EAEAEA;
  }
`

const InputPicture = styled.div`
  width: 100%;
  height: 250px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled(InputArea)`
  align-items: center;
`

const PictureIcon = styled(Img)`
  width: 70px;
  height: 70px;
`

const PictureButton = styled(SubmitButton)`
  background-color: #EAEAEA;
  color: black;
`

const ButtonArea = styled(ReviewInfoArea)`
  justify-content: flex-end;
  margin-top: -50px;
`

const CompleteButton = styled(SubmitButton)<{buttonType: "cancel" | "write"}>`
  width: 65px;
  height: 35px;
  background-color: ${props => props.buttonType === "cancel" ? "#EAEAEA" : ""};
  color: ${props => props.buttonType === "cancel" ? "black" : ""};
  margin-left: 10px;
`

export { ReviewCreatePage, ReviewInfoArea, SubArea, InputArea, SelectBox, Seleted, SelectedValue, Arrow, OptionBox, Option, InputPicture, IconWrapper, PictureIcon, PictureButton, ButtonArea, CompleteButton }