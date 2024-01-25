import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import {
  IconSettings,
  IconUser,
  IconUserWrapper,
  AvatarImg,
} from './UserBar.styled';
import { selectUser } from 'store/auth/selector';

function UserBar() {
  const { avatarURL } = useSelector(selectUser);

  return (
    <>
      <IconSettings aria-label="Settings">
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>

      <IconUserWrapper border={avatarURL}>
        {avatarURL ? (
          <>
            <IconUser aria-label="Avatar">
              <use href={`${sprite}#icon-user`} />
            </IconUser>

            <AvatarImg src={avatarURL} sizes="90px" loading="lazy" />
          </>
        ) : (
          <IconUser aria-label="Avatar">
            <use href={`${sprite}#icon-user`} />
          </IconUser>
        )}
      </IconUserWrapper>
    </>
  );
}

export default UserBar;
