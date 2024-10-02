import react from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";

const Home = () => {
  return (
    // Card wrapper
    <div className={style.cardWrapper}>
      {/* Card component start */}
      <Card title="Welcome to Deep Matrix" icon="logo">
        {/* paragraph */}
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          cumque perspiciatis quae voluptate earum reprehenderit voluptatibus
          quidem distinctio delectus aut quod illo eveniet, ullam quasi dolores
          vero atque harum ex. Necessitatibus distinctio quas nesciunt.
        </p>

        {/* button wrapper */}
        <div className={style.buttonWrapper}>
          <button className={style.buttonStyle}>
            <span className={style.buttonText}>Create your account</span>
            <img src="/images/arrow-forward.png" alt="arrow-forward" />
          </button>
        </div>

        {/* sign in wrapper */}
        <div className={style.signInWrapper}>
          <span>Have an invite text ?</span>
          <Link className={style.signInText} to="/login">
            SignIn
          </Link>
        </div>
      </Card>
      {/* Card component end */}
    </div>
  );
};

export default Home;
