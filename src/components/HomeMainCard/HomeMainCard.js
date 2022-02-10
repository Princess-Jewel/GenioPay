import React from "react";
import {homeData} from "../../data/homeData";
import "./HomeMainCard.css";

const HomeMainCard = () => {
  return (
    <section className="home__card__main__section">
      {homeData.map((data, index) => {
        const { title, image, content } = data;

        return (
          <div className="home__card__main" key={index}>
           <div className="home__card__main__image">
           <img src={image} alt="" />
           </div>
            <p className="home__card__main__first-text">{title}</p>
            <p className="home__card__main__second-text">{content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default HomeMainCard;
