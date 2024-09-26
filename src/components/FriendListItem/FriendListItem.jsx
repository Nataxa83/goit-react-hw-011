import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline = false }) => {
  return (
    <div className={css.friendsBoxItem}>
      <img className={css.friendsAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p
        className={clsx(css.isOnline, {
          [css.online]: isOnline === true,
          [css.offline]: isOnline === false,
        })}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
