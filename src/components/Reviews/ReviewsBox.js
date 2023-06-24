import React from 'react';
import {
  RatingStar,
  ReviewsBoxStyle,
  UserBox,
  UserAvatar,
  UserName,
  UserReviews,
} from './ReviewsStyled';

export default function ReviewsBox() {
  return (
    <ReviewsBoxStyle>
      <UserBox>
        <UserAvatar
          src="https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594"
          alt="User avatar"
        />
        <div>
          <UserName>Olena Doe </UserName>
          <RatingStar
            initialValue={2}
            readonly={true}
            size={14}
            fillColor={'#FFAC33'}
            emptyColor={'#CEC9C1'}
            SVGstorkeWidth={2}
          />
        </div>
      </UserBox>
      <UserReviews>
        GooseTrack is impressive, the calendar view and filter options make it
        easy to stay organized and focused. Highly recommended.
      </UserReviews>
    </ReviewsBoxStyle>
  );
}
