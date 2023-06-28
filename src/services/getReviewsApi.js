import axios from 'axios';

const getReviewsApi = async () => {
  const URL = `http://localhost:3001/api/reviews`;

  const response = (await axios.get(URL)).data;
  return response;
};

export default getReviewsApi;