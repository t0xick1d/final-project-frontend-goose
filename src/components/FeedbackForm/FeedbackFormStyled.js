import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
import { Field } from 'formik';

const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const FeedbackFormWrapper = styled.div`
  padding: 28px 20px;
  width: 335px;

  color: var(--feedback-form-text);
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;

  @media ${device.tablet} {
    width: 468px;
    padding: 32px;
  }
`;

export const ButtonWindowClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: var(--modal-background-color);
  padding: 0;
  cursor: pointer;
`;

export const RatingError = styled.p`
  color: red;
`;

export const RatingStar = styled(Rating)`
  margin-top: 8px;
  margin-bottom: 20px;

  .filled-icons :not(:first-child) {
    margin-left: 2px;
  }

  .empty-icons :not(:first-child) {
    margin-left: 2px;
  }
`;

export const ReviewOptionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonReviewEdit = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50px;
  background: ${props =>
    props.editButtonActivate
      ? 'var(--accent-background-color)'
      : 'var(--background-feedback-form-btn-edit)'};
  cursor: pointer;

  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const ButtonReviewDelete = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50px;
  background: var(--background-feedback-form-btn-delete);
  cursor: pointer;

  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const FieldInput = styled(Field)`
  margin-top: 8px;
  margin-bottom: 14px;
  padding: 12px 14px;
  width: 100%;
  min-height: 130px;

  text-align: start;

  color: var(--feedback-form-text-input);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  border-radius: 8px;
  border: 1px solid var(--modal-border-color);
  background: var(--feedack-form-input);

  resize: none;
`;

export const SaveButton = styled.button`
  width: 143px;
  height: 42px;

  border: none;
  border-radius: 8px;
  background: var(--background-feedack-form-btn-action);

  color: var(--feedback-form-text-input);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  :hover,
  :focus {
    background: ${props => !props.disabled && 'var(--accent-background-color)'};
    cursor: ${props => props.disabled && 'not-allowed'};
  }

  @media ${device.tablet} {
    width: 198px;
  }
`;

export const ActionButton = styled.button`
  width: 143px;
  height: 42px;

  border: none;
  border-radius: 8px;
  background: var(--background-feedack-form-btn-action);

  color: var(--feedback-form-text-input);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  :hover,
  :focus {
    background: var(--accent-background-color);
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 198px;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
`;

export const IconClose = styled.svg`
  stroke: var(--modal-close-icon);
  width: 24px;
  height: 24px;
`;

export const IconEdit = styled.svg`
  stroke: #3e85f3;
  fill: none;
  width: 16px;
  height: 16px;

  stroke: ${props =>
    props.editButtonActivate && 'var(--modal-edit-icon-stroke)'};
  fill: ${props => props.editButtonActivate && 'var(--modal-edit-icon-fill)'};
`;
