
import styles from "./MainSection.module.scss";
import Button from "../Button/Button";
import DownloadWidget from "../DownloadWidget/DownloadWidget";
import AppStoreSvg from "../../svg/AppStoreSvg";
import GooglePlaySvg from "../../svg/GooglePlaySvg";

const MainSection = () => {
  return (
    <div className={styles.mainSectionContainer}>
      <h1>
        Do you want to Learn more
        <br /> About cryptocurrencies
        <br />
        <span>quickly and easily ?</span>
      </h1>

      <p className={styles.textSubscribe}>
        Subscribe to our channel to learn more
      </p>

      <div className={styles.indicators}>
        <div className={styles.indicator}>
          <h3>20k+</h3>
          <p>subscribers</p>
        </div>

        <div className={styles.indicator}>
          <h3>19,5K</h3>
          <p>successful cases</p>
        </div>

        <div className={styles.indicator}>
          <h3>4.8/5</h3>
          <p>rating</p>
        </div>
      </div>

      <Button />

      <div className={styles.download}>
        <DownloadWidget
          svg={<GooglePlaySvg />}
          name="Google Play"
          text="get it on"
        />
        <DownloadWidget
          svg={<AppStoreSvg />}
          name="App Store"
          text="Available on the"
        />
      </div>
    </div>
  );
};

export default MainSection;
