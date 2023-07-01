import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FeedbackFormWrapper,
  RatingStar,
  ReviewOptionsBox,
  ButtonWindowClose,
  ButtonReviewEdit,
  ButtonReviewDelte,
  FieldInput,
  ButtonBox,
  SaveButton,
  ActionButton,
} from './FeedbackFormStyled';
import ModalCloseSvg from '../../images/icons/modal-x-close.svg';
import ReviewEditSvg from '../../images/icons/review-edit.svg';
import ReviewDelteSvg from '../../images/icons/review-delete.svg';
import { useEffect, useState } from 'react';

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
  }, []);

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
      />
      <ButtonWindowClose type="button" onClick={handleClose}>
        <img src={ModalCloseSvg} alt="Close review Window" />
      </ButtonWindowClose>
      <Formik
        validationSchema={ReviewSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <form>
          <ReviewOptionsBox>
            <label>Review</label>
            <ButtonBox>
              {btnEditVisible && (
                <ButtonReviewEdit type="button">
                  <img src={ReviewEditSvg} alt="Edit review" />
                </ButtonReviewEdit>
              )}
              {btnDeleteVisible && (
                <ButtonReviewDelte type="button">
                  <img src={ReviewDelteSvg} alt="Delete review" />
                </ButtonReviewDelte>
              )}
            </ButtonBox>
          </ReviewOptionsBox>
          <FieldInput
            name="reviewText"
            component="textarea"
            placeholder="Enter text"
            value={comment}
            disabled={fieldInputDisabled}
          ></FieldInput>
          <ButtonBox>
            <SaveButton type="submit" disabled={btnSaveDisabled}>
              Save
            </SaveButton>
            <ActionButton type="button" onClick={handleClose}>
              Cancel
            </ActionButton>
          </ButtonBox>
        </form>
      </Formik>
    </FeedbackFormWrapper>
  );
}
