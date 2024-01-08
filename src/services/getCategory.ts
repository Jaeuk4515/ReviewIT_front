import computer from "../assets/icons/computer.svg";
import laptop from "../assets/icons/laptop.svg";
import phone from "../assets/icons/phone.svg";
import monitor from "../assets/icons/monitor.svg";
import keyboard from "../assets/icons/keyboard.svg";
import mouse from "../assets/icons/mouse.svg";
import tablet from "../assets/icons/tablet.svg";
import review_write from "../assets/icons/review_write.svg";
import review_likey from "../assets/icons/review_likey.svg";
import comment_icon from "../assets/icons/chat.svg";
import smart_watch from "../assets/icons/smart-watch.svg";
import speaker from "../assets/icons/speaker.svg";

export default function getCategory(categoryName: string) {
  let svg = "";

  switch (categoryName) {
    case "컴퓨터":
      svg = computer;
      break;
    case "노트북":
      svg = laptop;
      break;
    case "핸드폰":
      svg = phone;
      break;
    case "모니터":
      svg = monitor;
      break;
    case "키보드":
      svg = keyboard;
      break;
    case "마우스":
      svg = mouse;
      break;
    case "태블릿":
      svg = tablet;
      break;
    case "리뷰":
      svg = review_write;
      break;
    case "좋아요":
      svg = review_likey;
      break;
    case "댓글":
      svg = comment_icon;
      break;
    case "스마트워치":
      svg = smart_watch;
      break;
    case "스피커":
      svg = speaker;
      break;
  };

  return svg;
}