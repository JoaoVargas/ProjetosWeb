import axios from 'axios';

const TOKEN = 'cjak9kpr01qji1gtn1qgcjak9kpr01qji1gtn1r0';

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN
  }
});
