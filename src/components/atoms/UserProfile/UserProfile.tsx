import { UserImg } from "./UserProfile.styles";

export default function UserProfile({ url }: {url: string}) {
  return (
    <UserImg category={url} />
  )
}