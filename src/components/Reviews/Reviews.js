import React, { useState, useEffect } from 'react';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ReviewsWrapper>
      <ReviewsHeader>Reviews</ReviewsHeader>
      <UserReviewsBlock>
        <ReviewsBoxList>
          {windowWidth >= 1440 ? (
            <>
              {
                <>
                  <ReviewsBox />
                  <ReviewsBox />
                </>
              }
            </>
          ) : (
            <>{<ReviewsBox />}</>
          )}
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
