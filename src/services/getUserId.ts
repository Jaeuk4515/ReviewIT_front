import axios from 'axios';
import Cookies from 'universal-cookie';

export default async function getUserId() {
  const cookies = new Cookies();
  const jwtToken = cookies.get('token');

  const response = await axios.get('http://localhost:3001/user/getUserId', {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });

  return response.data;
}