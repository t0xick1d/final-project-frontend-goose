import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FeedbackFormWrapper,
  RatingStar,
  ReviewOptionsBox,
  ButtonWindowClose,
  ButtonReviewEdit,
  ButtonReviewDelete,
  FieldInput,
  ButtonBox,
  SaveButton,
  ActionButton,
  ErrorMessageStyled,
  RatingError,
} from './FeedbackFormStyled';
import ModalCloseSvg from '../../images/icons/modal-x-close.svg';
import ReviewEditSvg from '../../images/icons/review-edit.svg';
import ReviewDelteSvg from '../../images/icons/review-delete.svg';
import { useEffect, useState } from 'react';
import ReviewsApi from 'services/ReviewsApi';
import { useSelector } from 'react-redux';
import { getUser } from 'redux-store/Slices/AuthSlice';

const ReviewSchema = Yup.object().shape({
  reviewText: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(300, 'Maximum 300 characters')
    .required('Required field'),
});

export default function FeedbackForm({ handleClose, review }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [btnEditVisible, setBtnEditVisible] = useState(false);
  const [btnDeleteVisible, setBtnDeleteVisible] = useState(false);
  const [fieldInputDisabled, setFieldInputDisabled] = useState(false);
  const [ratingStarsReadonly, setRatingStarsReadonly] = useState(false);
  const [btnSaveDisabled, setBtnSaveDisabled] = useState(false);
  const [isThereRating, setIsThereRating] = useState(true);

  const selector = useSelector(getUser);

  useEffect(() => {
    if (review.length !== 0) {
      const { comment, rating } = review;
      setComment(comment);
      setRating(rating);
      setFieldInputDisabled(true);
      setBtnEditVisible(true);
      setBtnDeleteVisible(true);
      setRatingStarsReadonly(true);
      setBtnSaveDisabled(true);
    }
  }, [review]);

  const handleSubmit = async (values, { resetForm }) => {
    const name = selector.user.name;

    if (rating === 0) {
      setIsThereRating(false);
      return;
    }

    await ReviewsApi.addUserReview({
      name: name,
      comment: values.reviewText,
      rating: rating,
    });
    setIsThereRating(true);
    resetForm();
  };

  const handleRatingChange = rating => {
    setRating(rating);
  };

  const handleReviewDelete = async () => {
    await ReviewsApi.deleteUserReview();
  };

  return (
    <FeedbackFormWrapper>
      <p>Rating</p>
      <RatingStar
        initialValue={rating}
        readonly={ratingStarsReadonly}
        size={24}
        fillColor={'#FFAC33'}
        emptyColor={'#CEC9C1'}
        SVGstorkeWidth={2}
        onClick={handleRatingChange}
      />
      {!isThereRating && <RatingError>Rating is required</RatingError>}

      <ButtonWindowClose type="button" onClick={handleClose}>
        <img src={ModalCloseSvg} alt="Close review Window" />
      </ButtonWindowClose>

      <Formik
        initialValues={{ reviewText: comment }}
        validationSchema={ReviewSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <ReviewOptionsBox>
            <label>Review</label>
            <ButtonBox>
              {btnEditVisible && (
                <ButtonReviewEdit type="button">
                  <img src={ReviewEditSvg} alt="Edit review" />
                </ButtonReviewEdit>
              )}
              {btnDeleteVisible && (
                <ButtonReviewDelete type="button" onClick={handleReviewDelete}>
                  <img src={ReviewDelteSvg} alt="Delete review" />
                </ButtonReviewDelete>
              )}
            </ButtonBox>
          </ReviewOptionsBox>

          <FieldInput
            name="reviewText"
            component="textarea"
            placeholder="Enter text"
            disabled={fieldInputDisabled}
          ></FieldInput>
          <ErrorMessage name="reviewText">
            {msg => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
          <ButtonBox>
            <SaveButton type="submit" disabled={btnSaveDisabled}>
              Save
            </SaveButton>
            <ActionButton type="button" onClick={handleClose}>
              Cancel
            </ActionButton>
          </ButtonBox>
        </Form>
      </Formik>
    </FeedbackFormWrapper>
  );
}
