import { Formik } from 'formik';
import {
  FeedbackFormWrapper,
  RatingStar,
  ReviewOptionsBox,
  ButtonWindowClose,
  ButtonReviewEdit,
  ButtonReviewDelte,
  FieldInput,
  ButtonBox,
} from './FeedbackFormStyled';
import ModalCloseSvg from '../../images/icons/modal-x-close.svg';
import ReviewEditSvg from '../../images/icons/review-edit.svg';
import ReviewDelteSvg from '../../images/icons/review-delete.svg';

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
      <Formik>
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
          <FieldInput component="textarea"></FieldInput>
          <ButtonBox>
            <button type="button">Save</button>
            <button type="button">Cancel</button>
          </ButtonBox>
        </form>
      </Formik>
    </FeedbackFormWrapper>
  );
}