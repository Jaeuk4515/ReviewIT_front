import { useState } from "react";
import { ModalBg } from "../Modal/AuthModal/AuthModal.styles";
import { ImageWrapper, FullImage, ModalPrevButton, ModalNextButton } from "./ImageModal.styles";

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
      <ImageWrapper onClick={(e) => { e.stopPropagation() }}>
        <ModalPrevButton className="" direction="left" state={urlsIndex <= 0 ? "disable" : "enable"} onClick={handlePrevClick} />
        <FullImage category={urls[urlsIndex]} />
        <ModalNextButton className="" direction="right" state={urlsIndex >= urls.length - 1 ? "disable" : "enable"} onClick={handleNextClick} />
      </ImageWrapper>
    </ModalBg>
  )
}