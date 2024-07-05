
import styles from './DownloadWidget.module.scss'
import PropTypes from "prop-types";

const DownloadWidget = ({svg, name, text}) => {
  return (
    <a href="#" className={styles.widget}>
      {svg}
      <div className={styles.texts}>
        <p className={styles.text}>{text}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </a>
  )
}

DownloadWidget.propTypes = {
  svg: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default DownloadWidget
