import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div className={css.profileInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.statsItem}>
          <span className={css.itemName}>Followers</span>
          <span className={css.itemQNT}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.itemName}>Views</span>
          <span className={css.itemQNT}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.itemName}>Likes</span>
          <span className={css.itemQNT}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
