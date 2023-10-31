import { UserImg } from "./UserProfile.styles";

interface UserProfileType {
  className: string;
  url: string;
}

export default function UserProfile({ className, url }: UserProfileType) {
  return (
    <UserImg className={className} category={url} />
  )
}