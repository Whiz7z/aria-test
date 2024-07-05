import styles from "./ReviewCard.module.scss";
import PropTypes from "prop-types";

const ReviewCard = ({review}) => {

  const { name, photo, linkAt, text } = review;
  return (
    <div className={styles.cardBorder}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <img src={photo} alt={name} />
          </div>

          <div className={styles.info}>
            <h3>{name}</h3>
            <p>{linkAt}</p>
          </div>
        </div>

        <div className={styles.review}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewCard;
