import axios from 'axios';

const URL = 'https://goose-track-ity9.onrender.com/api/reviews';

const getAllReviews = async () => {
  const response = (await axios.get(`${URL}`)).data;
  return response;
};

const getUserReview = async () => {
  const response = (await axios.get(`${URL}/own`)).data;
  return response;
};

const addUserReview = async () => {};

const editUserReview = async () => {};

const deleteUserReview = async () => {};

export default { getAllReviews, getUserReview };
