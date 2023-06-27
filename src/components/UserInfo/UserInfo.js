import { useSelector } from 'react-redux';
import { getUser } from 'redux-store/Slices/AuthSlice';
import { Name, Avatar, AvatarLetter, AvatarImg, Link } from './UserInfo.styled';

export const UserInfo = () => {
  const selector = useSelector(getUser);

  const name = selector.user?.name || 'Name';
  const avatar = selector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  return (
    <Link to={'/account'}>
      <Name>{name}</Name>
      <Avatar>
        {avatar && avatar !== null ? (
          <AvatarImg src={avatar} alt="Avatar" />
        ) : (
          <AvatarLetter>{firstLetter}</AvatarLetter>
        )}
      </Avatar>
    </Link>
  );
};
