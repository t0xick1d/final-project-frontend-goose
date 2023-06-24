import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';

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

export const RatingStar = styled(Rating)`
  .filled-icons :not(:first-child) {
    margin-left: 10px;
  }

  .empty-icons :not(:first-child) {
    margin-left: 10px;
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;

  @media ${device.tablet} {
    max-width: 580px;
  }

  @media ${device.desktop} {
    max-width: 1184px;
  }
`;

export const ReviewsHeader = styled.h2`
  color: #3e85f3;
  font-size: 28px;
  font-family: Inter;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const ReviewsBoxStyle = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);

  @media ${device.tablet} {
    padding: 32px;
  }
`;

export const UserReviewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const ReviewsBoxList = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  gap: 18px;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const UserName = styled.p`
  margin-bottom: 13px;
  color: #343434;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 18px;
`;

export const UserReviews = styled.p`
  margin-top: 24px;
  color: rgba(17, 17, 17, 0.7);
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 18px;

  @media ${device.tablet} {
    margin-left: 68px;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 8px;

  @media ${device.tablet} {
    margin-top: 18px;
  }

  @media ${device.desktop} {
    margin-top: 32px;
  }
`;

export const ButtonArrow = styled.button`
  border: none;
  padding: 0;
`;
