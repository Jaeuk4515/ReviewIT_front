import { useState } from "react";
import { ModalBg } from "../Modal/AuthModal/AuthModal.styles";
import { NextButton, PrevButton } from "../ReviewCard/ReviewCard.styles";
import { FullImage, ModalPrevButton, ModalNextButton } from "./ImageModal.styles";

interface ImageModalType {
  urls: string[];
  setImgModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ImageModal({ urls, setImgModal }: ImageModalType) {
  const [ urlsIndex, setUrlsIndex ] = useState(0);
  
  const handlePrevClick = () => {
    if (urlsIndex <= 0) return;
    setUrlsIndex(prevIndex => prevIndex - 1);
  }

  const handleNextClick = () => {
    if (urlsIndex >= urls.length - 1) return;
    setUrlsIndex(prevIndex => prevIndex + 1);
  }

  return (
    <ModalBg onClick={() => { setImgModal(false) }}>
      <div onClick={(e) => { e.stopPropagation() }} style={{position: "relative"}}>
        <ModalPrevButton className="" direction="left" state={urlsIndex <= 0 ? "disable" : "enable"} onClick={handlePrevClick} />
        <FullImage category={urls[urlsIndex]} />
        <ModalNextButton className="" direction="right" state={urlsIndex >= urls.length - 1 ? "disable" : "enable"} onClick={handleNextClick} />
      </div>
    </ModalBg>
  )
}