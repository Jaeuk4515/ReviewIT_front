import axios from "axios";
import { origin_URL } from "../App";

export default async function getUserInfoById(userId: string) {
  const response = await axios.post(`${origin_URL}/user/getUserInfo`, { _id: userId });
  return response.data;
}