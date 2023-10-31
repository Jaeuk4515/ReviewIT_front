import { ProductImg } from "./ImageCard.styles";

interface ImageCardType {
  className: string;
  url: string;
}

export default function ImageCard({ className, url }: ImageCardType) {
  return (
    <ProductImg className={className} category={url} />
  )
}