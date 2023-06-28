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

export default function ReviewsSlider() {
  let slider;
  const data = [
    {
      name: 'Kateryna Hilcher',
      comment:
        'Really helps to plan the day and visualize tasks. Exactly what I was looking for. Huge thanks to the developers! ',
    },
    {
      name: 'Mykola Kapytaniuk',
      comment:
        'Very cool app, everything is clear and functional. A great program for time chronology.',
    },
    {
      name: 'Ihor Dronenko',
      comment:
        'Really helps to increase productivity. The application has a clear interface and useful features. I like it at the initial stage. ',
    },
    {
      name: 'Volodymyr Shvets',
      comment: 'A good, visual time planning program.',
    },
    {
      name: 'Margaryta Martinova',
      comment:
        'Very useful and wonderful app. Very convenient, can be used on all my devices with the same notes without rewriting every time I switch devices. ',
    },
    {
      name: 'Oleksandr Bebelyuk',
      comment:
        'Very convenient program for work and personal planning. It replaced a whole CRM system for me at work. The mobile version works great without crashes or bugs, just like the PC browser version. Instant synchronization. Very easy and convenient to use. 5/5 ',
    },
    {
      name: 'Dima Babyk',
      comment:
        "Excellent app! I use it a lot and everything is great. But I can't understand why you can't put your own photo as the background of the board, it would be much better. Otherwise, I recommend it for structuring any work, projects, and more. ",
    },
    {
      name: 'Pavlo Trunov',
      comment:
        "A pleasant find for me. It's exactly what I was looking for. The main advantage is the visual visualization in the form of boards and cards. I recommend it!",
    },
    {
      name: 'Sergiy Kulykov',
      comment:
        'This is the best app for planning big or small goals. For the first time, I see such a convenient and understandable system where you can lay out your thoughts on shelves and understand what you want and how to achieve it, using small steps to your goal. Thank you very much💛',
    },
  ];
  const img = 'https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594';

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
            {data.map(item => {
              return (
                <ReviewsBox
                  avatarUrl={img}
                  name={item.name}
                  rating={3}
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
