import axios from "axios";

export default async function getUserInfoById(userId: string) {
  const response = await axios.post("http://localhost:3001/user/getUserInfo", { _id: userId });
  return response.data;
}