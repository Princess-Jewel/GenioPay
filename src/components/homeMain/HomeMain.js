import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/GENIOPAY BLUE ICON AND TEXT 2.svg";
import HomeMainCard from "../HomeMainCard/HomeMainCard";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <section>
      <div className="home__main">
        <div className="home__main__logo__container">
          <img src={logo} alt="" className="home__main__logo" />
        </div>
        <div className="home__main__text__container">
          <h3>How would you like to use Geniopay?</h3>
          <p>Custom views tailored to specific role on the platform</p>
        </div>
        <HomeMainCard/>
        <Link to='/'><button className="home__main__button">Continue</button></Link>
      </div>
    </section>
  );
};

export default HomeMain;
