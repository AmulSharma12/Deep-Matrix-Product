import react from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText, icon }) => {
  return (
    <button className={styles.buttonStyle}>
      <span className={styles.buttonText}>{buttonText}</span>
      <img src={`/images/${icon}.png`} alt="arrow-forward" />
    </button>
  );
};

export default Button;
