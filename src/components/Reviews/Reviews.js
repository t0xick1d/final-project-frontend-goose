import React from 'react';
import ArrowLeft from '../../images/icons/reviews-arrow-left.svg';
import ArrowRight from '../../images/icons/reviews-arrow-right.svg';
import {
  ReviewsWrapper,
  ReviewsHeader,
  ButtonArrow,
  ButtonList,
  UserReviewsBlock,
  ReviewsBoxList,
} from './ReviewsStyled';
import ReviewsBox from './ReviewsBox';

export default function Reviews() {
  return (
    <ReviewsWrapper>
      <ReviewsHeader>Reviews</ReviewsHeader>

      <UserReviewsBlock>
        <ReviewsBoxList>
          <ReviewsBox />
          <ReviewsBox />
        </ReviewsBoxList>
        <ButtonList>
          <ButtonArrow>
            <img src={ArrowLeft} alt="SVG Icon" />
          </ButtonArrow>
          <ButtonArrow>
            <img src={ArrowRight} alt="SVG Icon" />
          </ButtonArrow>
        </ButtonList>
      </UserReviewsBlock>
    </ReviewsWrapper>
  );
}
