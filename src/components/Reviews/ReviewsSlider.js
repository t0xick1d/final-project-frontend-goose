import ArrowLeft from '../../images/icons/reviews-arrow-left.svg';
import ArrowRight from '../../images/icons/reviews-arrow-right.svg';
import {
  ReviewsWrapper,
  ReviewsHeader,
  ButtonArrow,
  ButtonList,
  UserReviewsBlock,
  SliderStyled,
} from './ReviewsStyled';
import ReviewsBox from './ReviewsBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import getReviewsApi from 'services/getReviewsApi';

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState([]);
  let slider;

  useEffect(() => {
    async function getReviews () {
      setReviews(await getReviewsApi());
    };
    getReviews();
  }, []);

  const handlePrevious = () => {
    slider.slickPrev();
  };

  const handleNext = () => {
    slider.slickNext();
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ReviewsWrapper>
      <ReviewsHeader>Reviews</ReviewsHeader>
      <UserReviewsBlock>
        <SliderStyled {...sliderSettings} ref={c => (slider = c)}>
          {reviews.map(item => {
            return (
              <ReviewsBox
                key={item._id}
                avatarUrl={item.avatarURL}
                name={item.name}
                rating={item.rating}
                comment={item.comment}
              />
            );
          })}
        </SliderStyled>
      </UserReviewsBlock>
      <ButtonList>
        <ButtonArrow onClick={handlePrevious}>
          <img src={ArrowLeft} alt="Scroll left to review" />
        </ButtonArrow>
        <ButtonArrow onClick={handleNext}>
          <img src={ArrowRight} alt="Scroll right to review" />
        </ButtonArrow>
      </ButtonList>
    </ReviewsWrapper>
  );
}
