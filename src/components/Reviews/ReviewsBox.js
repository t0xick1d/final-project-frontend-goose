import {
  RatingStar,
  ReviewsBoxStyle,
  UserBox,
  UserAvatar,
  UserName,
  UserReviews,
} from './ReviewsStyled';

export default function ReviewsBox({
  avatarUrl = 'https://photoshablon.com/_ph/44/2/193521795.jpg?1687495594',
  name,
  rating = 0,
  comment,
}) {
  return (
    <ReviewsBoxStyle>
      <UserBox>
        <UserAvatar src={avatarUrl} alt="User avatar" />
        <div>
          <UserName>{name}</UserName>
          <RatingStar
            initialValue={rating}
            readonly={true}
            size={14}
            fillColor={'#FFAC33'}
            emptyColor={'#CEC9C1'}
            SVGstorkeWidth={2}
          />
        </div>
      </UserBox>
      <UserReviews>{comment}</UserReviews>
    </ReviewsBoxStyle>
  );
}
