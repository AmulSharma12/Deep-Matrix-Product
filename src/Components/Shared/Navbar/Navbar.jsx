import react from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const brandStyle = {
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };

  const logoTextStyle = {
    marginLeft: "10px",
  };

  return (
    <nav className={`container ${styles.navbarContainer}`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoTextStyle}>Deep Matrix</span>
      </Link>
    </nav>
  );
};

export default Navbar;
