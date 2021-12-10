import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartIcon from "./HeaderCartIcon";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartIcon/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Foods" />
      </div>
    </Fragment>
  );
};

export default Header;
