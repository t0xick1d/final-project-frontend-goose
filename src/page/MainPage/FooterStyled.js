import styled from 'styled-components';

export const ReviewsHeader = styled.h2`
  color: #3e85f3;
  font-size: 28px;
  font-family: Inter;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
`;

export const ReviewsBox = styled.div`
  margin-top: 40px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
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
`;