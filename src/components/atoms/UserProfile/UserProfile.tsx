import { UserImg } from "./UserProfile.styles";

interface UserProfileType {
  className: string;
  url: string;
  onClick: () => void;
}

export default function UserProfile({ className, url, onClick }: UserProfileType) {
  return (
    <UserImg className={className} category={url} onClick={onClick} />
  )
}