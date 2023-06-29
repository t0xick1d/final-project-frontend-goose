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
  ActionButton,
} from './FeedbackFormStyled';
import ModalCloseSvg from '../../images/icons/modal-x-close.svg';
import ReviewEditSvg from '../../images/icons/review-edit.svg';
import ReviewDelteSvg from '../../images/icons/review-delete.svg';

const ReviewSchema = Yup.object().shape({
  reviewText: Yup.string()
    .min(10, 'Minimum 10 characters')
    .max(300, 'Maximum 300 characters')
    .required('Required field'),
});

export default function FeedbackForm() {
  return (
    <FeedbackFormWrapper>
      <p>Rating</p>
      <RatingStar
        initialValue={2}
        // readonly={true}
        size={24}
        fillColor={'#FFAC33'}
        emptyColor={'#CEC9C1'}
        SVGstorkeWidth={2}
      />
      <ButtonWindowClose type="button">
        <img src={ModalCloseSvg} alt="Close review Window" />
      </ButtonWindowClose>
      <Formik
        initialValues={{ reviewText: '' }}
        validationSchema={ReviewSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <form>
          <ReviewOptionsBox>
            <label>Review</label>
            <ButtonBox>
              <ButtonReviewEdit type="button">
                <img src={ReviewEditSvg} alt="Edit review" />
              </ButtonReviewEdit>
              <ButtonReviewDelte type="button">
                <img src={ReviewDelteSvg} alt="Delete review" />
              </ButtonReviewDelte>
            </ButtonBox>
          </ReviewOptionsBox>
          <FieldInput
            name="reviewText"
            component="textarea"
            placeholder="Enter text"
          ></FieldInput>
          <ButtonBox>
            <ActionButton type="submit">Save</ActionButton>
            <ActionButton type="button">Cancel</ActionButton>
          </ButtonBox>
        </form>
      </Formik>
    </FeedbackFormWrapper>
  );
}
