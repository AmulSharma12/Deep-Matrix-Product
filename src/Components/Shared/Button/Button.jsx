import react from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonStyle}>
      <span className={styles.buttonText}>{buttonText}</span>
      <img src={`/images/${icon}.png`} alt="arrow-forward" />
    </button>
  );
};

export default Button;
