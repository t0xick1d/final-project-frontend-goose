import FeedbackForm from 'components/FeedbackForm/FeedbackForm';
import Modal from 'components/Modal/Modal';

const AddFeedbackModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <FeedbackForm handleClose={handleClose} />
    </Modal>
  );
};

export default AddFeedbackModal;