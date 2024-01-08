import { useState } from "react";
import { Slider, Radio, ImageList, ImageItem, ImageCard, BulletWrapper, Bullet } from "./Image3dSlide.styles"

export default function Image3dSlide({ productImages }: {productImages: string[]}) {
  const [ checkedIdx, setCheckedIdx ] = useState(0);

  return (
    <Slider>
      {productImages.map((_, idx) => <Radio key={idx} type="radio" name="slide" id={`slide${idx}`} checked={checkedIdx === idx ? true : false} />)}
      <div style={{position: "relative", width: "95%", height: "95%"}}>
        <ImageList>
        {/* {productImages.map((url, idx) => <ImageItem key={idx} idx={idx} checkedindex={checkedIdx}><ReviewImg className="" url={url} /></ImageItem>)} */}
        {productImages.map((url, idx) => <ImageItem key={idx} idx={idx} checkedindex={checkedIdx}><ImageCard className="" url={url} /></ImageItem>)}
        </ImageList>
      </div>
      <BulletWrapper>
        {productImages.map((_, idx) => <Bullet htmlFor={`slide${idx}`} onClick={() => { setCheckedIdx(idx) }} active={checkedIdx === idx ? "yes" : "no"} />)}
      </BulletWrapper>
    </Slider>
  )
}