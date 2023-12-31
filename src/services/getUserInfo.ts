import axios from 'axios';
import Cookies from 'universal-cookie';
import { origin_URL } from '../App';

export default async function getUserInfo() {
  const cookies = new Cookies(null, { path: '/', domain: 'https://review-it-tawny.vercel.app' });
  const jwtToken = cookies.get('token');
  console.log(jwtToken);
  
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