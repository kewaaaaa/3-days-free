import React from "react";
import s from "./style.module.scss";

const Showcase = () => {
  return (
    <div>
      <img
        className={s.logo}
        src="/logo.png"
        style={{ width: "280px", height: "84.2px" }}
        alt="logo"
      />
      <h1 className={s.title}>
        ielts va ingliz tilini o’rganishning eng tez va oson usuli
      </h1>
      <p className={s.txt}>
        bu usulni bir marta qo’llaysiz va boshqa hech qanday kursga boshqa
        ishingiz tushmaydi
      </p>
    </div>
  );
};

export default Showcase;
