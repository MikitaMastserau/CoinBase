import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const Button = ({ text }) => {
   return (
      <button className={styles.button}>{text}</button>
   );
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
};