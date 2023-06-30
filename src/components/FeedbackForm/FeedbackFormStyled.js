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

  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;

  @media ${device.tablet} {
    width: 468px;
    padding: 32px;
  }

  /* @media ${device.desktop} {
    max-width: 1184px;
  } */
`;

export const ButtonWindowClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: #ffffff;
  padding: 0;
  cursor: pointer;
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
  background: #e3f3ff;
  cursor: pointer;
`;

export const ButtonReviewDelte = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  cursor: pointer;
`;

export const FieldInput = styled(Field)`
  margin-top: 8px;
  margin-bottom: 14px;
  padding: 12px 14px;
  width: 100%;
  min-height: 130px;

  text-align: start;

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  border-radius: 8px;
  border: none;
  background: #f6f6f6;
`;

export const SaveButton = styled.button`
  width: 143px;
  height: 42px;

  border: none;
  border-radius: 8px;
  background: #e5edfa;

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  :hover,
  :focus {
    background: ${({ btnSaveDisabled }) =>
      btnSaveDisabled ? 'rgba(229, 237, 250, 1)' : 'rgba(62, 133, 243, 1)'};
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
  background: #e5edfa;

  color: #343434;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  :hover,
  :focus {
    background: #3e85f3;
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 198px;
  }
`;