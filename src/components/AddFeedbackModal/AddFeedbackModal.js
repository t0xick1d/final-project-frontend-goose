import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReviewsOperations from 'redux-store/Reviews/reviewsOperations';

const AddFeedbackModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReviewsOperations.getUserReview());
  }, [dispatch]);

  return (
    <Modal open={open} handleClose={handleClose}>
      <FeedbackForm handleClose={handleClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
