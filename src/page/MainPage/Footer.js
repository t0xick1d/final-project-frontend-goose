import React from 'react';
import {
  ReviewsHeader,
  ReviewsBox,
  UserBox,
  UserAvatar,
  UserName,
  UserReviews,
} from './FooterStyled';

const RatingStar = () => {
  return <p>Купа зірочок</p>;
};

export default function Reviews() {
  return (
    <div>
      <ReviewsHeader>Reviews</ReviewsHeader>
      <ReviewsBox>
        <UserBox>
          <UserAvatar
            src="https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594"
            alt="User avatar"
          />
          <div>
            <UserName>Olena Doe </UserName>
            <RatingStar />
          </div>
        </UserBox>
        <UserReviews>
          GooseTrack is impressive, the calendar view and filter options make it
          easy to stay organized and focused. Highly recommended.
        </UserReviews>
      </ReviewsBox>
      <div>
        <button>Ліво</button>
        <button>Право</button>
      </div>
    </div>
  );
}
