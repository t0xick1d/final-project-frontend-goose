import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import ReviewsApi from 'services/ReviewsApi';

const AddFeedbackModal = ({ open, handleClose }) => {
const [review, setReview] = useState([]);

useEffect(() => {
  async function getReview() {
    setReview(await ReviewsApi.getUserReview());
  }
  getReview();
}, []);

  return (
    <Modal open={open} handleClose={handleClose}>
      <FeedbackForm handleClose={handleClose} review={review} />
    </Modal>
  );
};

export default AddFeedbackModal;