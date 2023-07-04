import ArrowLeft from '../../images/icons/reviews-arrow-left.svg';
import ArrowRight from '../../images/icons/reviews-arrow-right.svg';
import {
  ReviewsHeader,
  ButtonArrow,
  ButtonList,
  UserReviewsBlock,
  ReviewsWrapper,
} from './ReviewsStyled';
import ReviewsBox from './ReviewsBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllReviews } from 'redux-store/Reviews/reviewsSelector';
import ReviewsOperations from 'redux-store/Reviews/reviewsOperations';
import Slider from 'react-slick';

export default function ReviewsSlider() {
  let slider;
  const reviews = useSelector(selectAllReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReviewsOperations.getAllReviews());
  }, [dispatch]);

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
    arrows: false,
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
        <Slider {...sliderSettings} ref={c => (slider = c)}>
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
        </Slider>
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
