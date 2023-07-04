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
  IconClose,
  IconEdit,
} from './FeedbackFormStyled';
import ReviewDelteSvg from '../../images/icons/review-delete.svg';
import { useEffect, useState } from 'react';
import { getUser } from 'redux-store/Slices/AuthSlice';
import { selectUserReview } from 'redux-store/Reviews/reviewsSelector';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsOperations from 'redux-store/Reviews/reviewsOperations';
import Icons from 'images/sprite.svg';

const ReviewSchema = Yup.object().shape({
  reviewText: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(300, 'Maximum 300 characters')
    .required('Required field'),
});

export default function FeedbackForm({ handleClose }) {
  const [starsNumber, setStarsNumber] = useState(0);
  const [btnEditVisible, setBtnEditVisible] = useState(false);
  const [btnDeleteVisible, setBtnDeleteVisible] = useState(false);
  const [fieldInputDisabled, setFieldInputDisabled] = useState(false);
  const [ratingStarsReadonly, setRatingStarsReadonly] = useState(false);
  const [btnSaveDisabled, setBtnSaveDisabled] = useState(false);
  const [isThereRating, setIsThereRating] = useState(true);
  const [editButtonActivate, setEditButtonActivate] = useState(false);

  const dispatch = useDispatch();
  const userSelector = useSelector(getUser);
  const userReview = useSelector(selectUserReview);

  useEffect(() => {
    setStarsNumber(userReview.rating);
  }, [userReview.rating]);

  useEffect(() => {
    if (userReview.length !== 0) {
      setFieldInputDisabled(true);
      setBtnEditVisible(true);
      setBtnDeleteVisible(true);
      setRatingStarsReadonly(true);
      setBtnSaveDisabled(true);
    }
  }, [userReview.length]);

  const handleSubmit = async (values, { resetForm }) => {
    //Якщо кнопка редагування активована, то виконати запит на редагування
    if (editButtonActivate === true) {
      editReviews(values);
      handleClose();
      return;
    }

    //Це звичайний запит на створення відгуку
    createReviews(values);
    handleClose();
    resetForm();
  };

  function createReviews(values) {
    const userName = userSelector.user.name;
    if (starsNumber === 0) {
      setIsThereRating(false);
      return;
    }

    dispatch(
      ReviewsOperations.addUserReview({
        name: userName,
        comment: values.reviewText,
        rating: starsNumber,
      })
    );
    setIsThereRating(true);
  }

  function editReviews(values) {
    const userName = userSelector.user.name;
    dispatch(
      ReviewsOperations.editUserReview({
        name: userName,
        comment: values.reviewText,
        rating: starsNumber,
      })
    );
    setEditButtonActivate(false);
    setFieldInputDisabled(true);
    setRatingStarsReadonly(true);
    setBtnSaveDisabled(true);
  }

  const handleRatingChange = rating => {
    setStarsNumber(rating);
  };

  const handleReviewDelete = async () => {
    dispatch(ReviewsOperations.deleteUserReview());
    handleClose();
  };

  const handleReviewEdit = async () => {
    setEditButtonActivate(true);
    setFieldInputDisabled(false);
    setRatingStarsReadonly(false);
    setBtnSaveDisabled(false);
    setTimeout(() => {
      const reviewTextInput = document.querySelector('#reviewText');
      if (reviewTextInput) {
        reviewTextInput.focus();

        if (reviewTextInput.value) {
          const textLength = reviewTextInput.value.length;
          reviewTextInput.setSelectionRange(textLength, textLength);
        }
      }
    }, 0);
  };

  return (
    <FeedbackFormWrapper>
      <p>Rating</p>
      <RatingStar
        initialValue={userReview.rating}
        readonly={ratingStarsReadonly}
        size={24}
        fillColor={'#FFAC33'}
        emptyColor={'#CEC9C1'}
        SVGstorkeWidth={2}
        onClick={handleRatingChange}
      />
      {!isThereRating && <RatingError>Rating is required</RatingError>}

      <ButtonWindowClose type="button" onClick={handleClose}>
        <IconClose>
          <use href={`${Icons}#icon-x-close`}></use>
        </IconClose>
      </ButtonWindowClose>

      <Formik
        initialValues={{ reviewText: userReview.comment }}
        validationSchema={ReviewSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <ReviewOptionsBox>
            <label>Review</label>
            <ButtonBox>
              {btnEditVisible && (
                <ButtonReviewEdit
                  type="button"
                  onClick={handleReviewEdit}
                  editButtonActivate={editButtonActivate}
                >
                  <IconEdit editButtonActivate={editButtonActivate}>
                    <use href={`${Icons}#icon-pencil-01`}></use>
                  </IconEdit>
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
            id="reviewText"
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
              {editButtonActivate ? 'Edit' : 'Save'}
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
