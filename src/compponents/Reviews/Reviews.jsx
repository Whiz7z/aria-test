import styles from "./Reviews.module.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
import lorenzo from "../../imgs/lorenzo.png";
import adalina from "../../imgs/adalina.png";
import alexander from "../../imgs/alexander.png";
import rushana from "../../imgs/rushana.png";

import bgImg from "../../imgs/reviews-bg.png";

const reviews = [
  {
    name: "Lorenzo",
    linkAt: "@lorenzo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news",
    photo: lorenzo,
  },
  {
    name: "Adalina",
    linkAt: "@ada",
    text: "Must-have bot for crypto traders. Accurate signals and analysis",
    photo: adalina,
  },
  {
    name: "Alexander",
    linkAt: "@alex_x",
    text: "Superb cryptocurrency bot! Quick updates and reliable data",
    photo: alexander,
  },
  {
    name: "Rushana",
    linkAt: "@Hana",
    text: "Efficient and user-friendly bot. Simplifies crypto trading tasks",
    photo: rushana,
  },
];

const Reviews = () => {
  return (
    <div className={styles.mainContainer}>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.name} />
      ))}

      
    </div>
  );
};

export default Reviews;
