import { ProductImg } from "./ImageCard.styles";

export default function ImageCard({ url }: {url: string}) {
  return (
    <ProductImg category={url} />
  )
}