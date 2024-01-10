import styled from "styled-components";
import { Img } from "../../atoms/Category/Category.styles";
import { SubmitButton } from "../../blocks/CommentForm/CommentForm.styles";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/bottom-arrow.svg";
import Input from "../../atoms/Input/Input";
import TextArea from "../../atoms/TextArea/TextArea";

const ReviewCreatePage = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  gap: 5rem;

  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: 3rem;
    margin-bottom: 50px;
  };
  @media screen and (max-width: 400px) {
    gap: 2rem;
    margin-bottom: 15px;
  };
`

const ReviewInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  min-width: 800px;

  @media screen and (max-width: 900px) {
    width: 90%;
    min-width: initial;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 96%;
  };
`

const TextInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  // min-width: 320px;
  height: 500px;

  @media screen and (max-width: 900px) {
    height: 460px;
  };
  @media screen and (max-width: 800px) {
    height: 420px;
  };
  @media screen and (max-width: 700px) {
    height: 380px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 45%;
    height: 320px;
  };
  @media screen and (max-width: 450px) {
    height: 280px;
  };
  @media screen and (max-width: 400px) {
    height: 240px;
  };
`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    gap: .9rem;
  };
  @media screen and (max-width: 800px) {
    gap: .8rem;
  };
  @media screen and (max-width: 700px) {
    gap: .7rem;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    gap: .5rem;
  };
  @media screen and (max-width: 450px) {
    gap: .3rem;
  };
  @media screen and (max-width: 400px) {
    gap: .2rem;
  };
`

const InputBox = styled(Input)`
  @media screen and (max-width: 900px) {
    height: 38px;
    font-size: 16px;
    padding: 0 14px;
  };
  @media screen and (max-width: 800px) {
    height: 36px;
    font-size: 15px;
    padding: 0 13px;
  };
  @media screen and (max-width: 700px) {
    height: 34px;
    font-size: 14px;
    padding: 0 12px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 30px;
    font-size: 12px;
    padding: 0 10px;
  };
  @media screen and (max-width: 450px) {
    height: 28px;
    font-size: 11px;
    padding: 0 9px;
  };
  @media screen and (max-width: 400px) {
    height: 26px;
    font-size: 10px;
    padding: 0 8px;
  };
`

const InputTitle = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    font-size: 17px;
  };
  @media screen and (max-width: 800px) {
    font-size: 16px;
  };
  @media screen and (max-width: 700px) {
    font-size: 15px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 13px;
  };
  @media screen and (max-width: 450px) {
    font-size: 12px;
  };
  @media screen and (max-width: 400px) {
    font-size: 11px;
  };
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

  @media screen and (max-width: 900px) {
    height: 38px;
    font-size: 16px;
    padding-left: 13px;
  };
  @media screen and (max-width: 800px) {
    height: 36px;
    font-size: 15px;
    padding-left: 12px;
  };
  @media screen and (max-width: 700px) {
    height: 34px;
    font-size: 14px;
    padding-left: 11px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 30px;
    font-size: 12px;
    padding-left: 10px;
  };
  @media screen and (max-width: 450px) {
    height: 28px;
    font-size: 11px;
    padding-left: 9px;
  };
  @media screen and (max-width: 400px) {
    height: 26px;
    font-size: 10px;
    padding-left: 8px;
  };
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

  @media screen and (max-width: 900px) {
    height: 9px;
  };
  @media screen and (max-width: 800px) {
    height: 8px;
  };
  @media screen and (max-width: 700px) {
    height: 7px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 5px;
  };
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

  @media screen and (max-width: 900px) {
    top: 38px;
    font-size: 16px;
  };
  @media screen and (max-width: 800px) {
    top: 36px;
    font-size: 15px;
  };
  @media screen and (max-width: 700px) {
    top: 34px;
    font-size: 14px;
    height: ${props => props.on === "true" ? "130px" : 0};
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    top: 30px;
    font-size: 12px;
  };
  @media screen and (max-width: 450px) {
    top: 28px;
    font-size: 11px;
  };
  @media screen and (max-width: 400px) {
    top: 26px;
    font-size: 10px;
    height: ${props => props.on === "true" ? "110px" : 0};
  };
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
  };

  @media screen and (max-width: 900px) {
    height: 34px;
  };
  @media screen and (max-width: 800px) {
    height: 33px;
  };
  @media screen and (max-width: 700px) {
    height: 32px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    height: 28px;
  };
  @media screen and (max-width: 450px) {
    height: 26px;
    padding-left: 9px;
  };
  @media screen and (max-width: 400px) {
    height: 24px;
    padding-left: 8px;
  };
`

const ImageInfoArea = styled(TextInfoArea)`
  width: 50%;
  justify-content: flex-start;
  gap: 1rem;
`

const MaxImageText = styled.span`
  font-size: 15px;
  color: #B7B7B7;
  padding-bottom: 2px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  };
  @media screen and (max-width: 800px) {
    font-size: 13px;
  };
  @media screen and (max-width: 700px) {
    font-size: 12px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 11px;
  };
  @media screen and (max-width: 450px) {
    font-size: 10px;
    padding-bottom: 1px;
  };
  @media screen and (max-width: 400px) {
    font-size: 9px;
  };
`

const InputPicture = styled.div<{areatheme: "light" | "dark", isgrid: string}>`
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border: ${props => props.areatheme === "light" ? "1.5px solid rgba(0, 0, 0, .1)" : "1.5px solid rgba(255, 255, 255, .2)"};
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

  @media screen and (max-width: 700px) {
    width: 16px;
    height: 16px;
    top: 8px; right: 8px;
  };
  @media screen and (max-width: 500px) {
    width: 14px;
    height: 14px;
    top: 7px; right: 7px;
  };
  @media screen and (max-width: 400px) {
    width: 12px;
    height: 12px;
    top: 6px; right: 6px;
  };
`

const IconWrapper = styled(InputArea)`
  align-items: center;
`

const PictureIcon = styled(Img)`
  width: 70px;
  height: 70px;

  @media screen and (max-width: 900px) {
    width: 64px;
    height: 64px;
  };
  @media screen and (max-width: 800px) {
    width: 58px;
    height: 58px;
  };
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
  };
  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
  };
  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
  };
`

const FileBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ImageUploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EAEAEA;
  color: black;
  width: 120px;
  height: 40px;
  text-align: center;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 110px;
    height: 37px;
    font-size: 15px;
  };
  @media screen and (max-width: 800px) {
    width: 100px;
    height: 34px;
    font-size: 14px;
  };
  @media screen and (max-width: 700px) {
    width: 90px;
    height: 31px;
    font-size: 13px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 75px;
    height: 27px;
    font-size: 11px;
  };
  @media screen and (max-width: 400px) {
    width: 65px;
    height: 25px;
    font-size: 10px;
  };
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

const TextInputArea = styled(InputArea)`
  width: 50%;
  min-width: 800px;

  @media screen and (max-width: 900px) {
    width: 90%;
    min-width: initial;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 95%;
  };
`

const TextBox = styled(TextArea)`
  height: 400px;

  @media screen and (max-width: 900px) {
    height: 380px;
    font-size: 15px;
  };
  @media screen and (max-width: 800px) {
    height: 360px;
    font-size: 14px;
    padding: 12px;
  };
  @media screen and (max-width: 700px) {
    height: 340px;
    font-size: 13px;
  };
  @media screen and (max-width: 500px) {
    height: 300px;
    font-size: 11.5px;
    padding: 10px;
  };
  @media screen and (max-width: 400px) {
    height: 260px;
    font-size: 10px;
  };
`

const TextLimit = styled.span`
  font-size: 15px;
  margin-left: auto;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  };
  @media screen and (max-width: 800px) {
    font-size: 13px;
  };
  @media screen and (max-width: 700px) {
    font-size: 12px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    font-size: 11px;
  };
  @media screen and (max-width: 400px) {
    font-size: 10px;
  };
`

const ButtonArea = styled(ReviewInfoArea)`
  justify-content: flex-end;
  margin-top: -50px;

  @media screen and (max-width: 800px) {
    margin-top: -40px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    margin-top: -30px;
  };
  @media screen and (max-width: 400px) {
    margin-top: -20px;
  };
`

const CompleteButton = styled(SubmitButton)<{buttontype: "cancel" | "write"; buttontheme?: "light" | "dark"}>`
  width: 65px;
  height: 35px;
  background-color: ${props => props.buttontype === "cancel" ? "#EAEAEA" : props.buttontheme === "dark" ? "#364F6B" : ""};
  color: ${props => props.buttontype === "cancel" ? "black" : ""};
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    width: 55px;
    height: 30px;
  };
  @media ${({ theme }) => theme.mediaQuery.small} {
    width: 50px;
    height: 25px;
  };
`

export { 
  ReviewCreatePage, 
  ReviewInfoArea, 
  TextInfoArea, 
  InputArea, 
  InputBox,
  InputTitle,
  SelectBox, 
  Seleted, 
  SelectedValue, 
  ArrowWrapper,
  Arrow, 
  OptionBox, 
  OptionWrapper,
  Option, 
  ImageInfoArea, 
  MaxImageText,
  InputPicture,
  ImageWrapper,
  XButton,
  IconWrapper, 
  PictureIcon, 
  FileBox,
  ImageUploadButton,
  ImageInput,
  TextInputArea,
  TextBox,
  TextLimit,
  ButtonArea, 
  CompleteButton 
}