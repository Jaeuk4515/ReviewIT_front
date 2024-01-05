import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/bottom-arrow.svg";

const ReviewCreatePage = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  gap: 5rem;
`

const ReviewInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  min-width: 800px;
`

const TextInfoArea = styled(ReviewInfoArea)`
  flex-direction: column;
  width: 40%;
  min-width: 320px;
  height: 500px;
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
  background-color: ${({ theme }) => theme.selectBoxColor};
`

const Seleted = styled.div<{theme: "light" | "dark"}>`
  width: 90%;
  height: 100%;
  border-right: 1.5px solid ${props => props.theme === "light" ? "rgba(0, 0, 0, .1)" : "rgba(255, 255, 255, .3)"};
  display: flex;
  align-items: center;
`

const SelectedValue = styled.div``

const ArrowWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`

const Arrow = styled(ArrowIcon)`
  width: 22px;
  fill: ${({ theme }) => theme.arrowColor};
`

const OptionBox = styled.div<{on: string}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${props => props.on === "true" ? "1.5px solid rgba(0, 0, 0, .1)" : 0};
  border-radius: 10px;
  height: ${props => props.on === "true" ? "143px" : 0};
  overflow-y: hidden;
  transition: .2s;
  position: absolute;
  top: 40px; left: -1.5px;
  z-index: 10;
  background-color: ${({ theme }) => theme.optionBoxColor};
  overflow: auto;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Option = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.optionHoverColor};
  }
`

const ImageInfoArea = styled(TextInfoArea)`
  width: 50%;
`

const InputPicture = styled.div<{isgrid: string}>`
  width: 100%;
  height: 400px;
  border: 1.5px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  box-sizing: border-box;
  display: ${props => props.isgrid === "true" ? "grid" : "flex"};
  justify-content: ${props => props.isgrid === "true" ? "" : "center"};
  align-items: ${props => props.isgrid === "true" ? "" : "center"};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: relative;
`

const XButton = styled(Img)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px; right: 10px;
  cursor: pointer;
`

const IconWrapper = styled(InputArea)`
  align-items: center;
`

const PictureIcon = styled(Img)`
  width: 70px;
  height: 70px;
`

const FileBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ImageUploadButton = styled.label`
  display: inline-block;
  background-color: #EAEAEA;
  color: black;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

const ImageInput = styled.input<{onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}>`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const TextLimit = styled.span`
  font-size: 15px;
  margin-left: auto;
`

const ButtonArea = styled(ReviewInfoArea)`
  justify-content: flex-end;
  margin-top: -50px;
`

const CompleteButton = styled(SubmitButton)<{buttontype: "cancel" | "write"; themeProps?: "light" | "dark"}>`
  width: 65px;
  height: 35px;
  background-color: ${props => props.buttontype === "cancel" ? "#EAEAEA" : props.themeProps === "dark" ? "#364F6B" : ""};
  color: ${props => props.buttontype === "cancel" ? "black" : ""};
  margin-left: 10px;
`

export { 
  ReviewCreatePage, 
  ReviewInfoArea, 
  TextInfoArea, 
  InputArea, 
  SelectBox, 
  Seleted, 
  SelectedValue, 
  ArrowWrapper,
  Arrow, 
  OptionBox, 
  OptionWrapper,
  Option, 
  ImageInfoArea, 
  InputPicture,
  ImageWrapper,
  XButton,
  IconWrapper, 
  PictureIcon, 
  FileBox,
  ImageUploadButton,
  ImageInput,
  TextLimit,
  ButtonArea, 
  CompleteButton 
}