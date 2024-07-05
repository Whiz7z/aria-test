
import styles from './Button.module.scss'

import PropTypes from "prop-types";

const Button = ({text}) => {
  return <a className={styles.button}>{text?? 'Join WhatsApp'}</a>;
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
