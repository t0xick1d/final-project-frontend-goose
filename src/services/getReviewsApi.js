import axios from 'axios';

const getReviewsApi = async () => {
  const URL = `https://goose-track-ity9.onrender.com/api/reviews`;

  const response = (await axios.get(URL)).data;
  return response;
};

export default getReviewsApi;