import react from "react";
import style from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  // startRegister method
  function startRegister() {
    navigate("/register");
  }

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
          <Button
            buttonText="Create your account"
            icon="arrow-forward"
            onClick={startRegister}
          ></Button>
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
