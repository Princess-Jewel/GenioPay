import React from "react";
// import {homeData} from "../../data/homeData";
import icon from "../../assets/personal.svg";
import icon1 from "../../assets/corporate.svg";
import "./HomeMainCard.css";

const HomeMainCard = () => {
  // const [style, setStyle] = useState("home__card__main");

  // const changeStyle = () => {
  //   console.log("you just clicked");
  //   setStyle("change__background__color");
  // };
  return (
    <section className="home__card__main__section">
      <div>
        <div className="home__card__main__corporate">
          <div className="home__card__main__image">
            <img src={icon} alt="" />
          </div>
          <p className="home__card__main__first-text__corporate">Personal account</p>
          <p className="home__card__main__second-text__corporate">Manage and curate your account yourself</p>
        </div>
      </div>

      <div >
        <div className="home__card__main">
          <div className="home__card__main__image">
            <img src={icon1} alt="" />
          </div>
          <p className="home__card__main__first-text">Business account</p>
          <p className="home__card__main__second-text">You can choose to also register as a business entity.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeMainCard;
