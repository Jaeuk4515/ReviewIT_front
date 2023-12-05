import { ProductImg } from "./ImageCard.styles";

interface ImageCardType {
  className: string;
  url: string;
  onClick?: () => void;
}

export default function ImageCard({ className, url, onClick }: ImageCardType) {
  return (
    <ProductImg className={className} category={url} onClick={onClick} />
  )
}