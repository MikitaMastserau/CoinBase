import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const GradientTitle = ({ text }) => {
   return (
      <h2 className={styles.title}>{text}</h2>
   )
};

GradientTitle.propTypes = {
   text: PropTypes.string.isRequired,
};