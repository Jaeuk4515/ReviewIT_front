import axios from 'axios';
import { cookies, origin_URL } from '../App';

export default async function getUserInfo() {
  const jwtToken = cookies.get('token');
  
  if (!jwtToken) return;

  const response = await axios.get(`${origin_URL}/user/my`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  return response.data;
}