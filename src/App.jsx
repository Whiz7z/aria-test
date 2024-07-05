
import styles from './App.module.scss'
import MainSection from './compponents/MainSection/MainSection'
import Reviews from './compponents/Reviews/Reviews';

import bgImg from "./imgs/reviews-bg.png";

function App() {

  return (
    <>
      <div className={styles.mainContainer}>
        <MainSection />
        <Reviews />
        <div className={styles.bgContainer}>
          <img className={styles.bg} src={bgImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App
