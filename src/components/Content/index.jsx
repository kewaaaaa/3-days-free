import React from "react";
import s from "./style.module.scss";

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.content__main}>
        <video src=""></video>
        <p className={s.content__titleMain}>
          Qanday qilib sizga Narxi, Vaqti va Sifati to'g'ri keladigan kursni
          tanlash?
        </p>
      </div>
      <div className={s.content__menu}>
        <div className={s.content__item}>
          <video src=""></video>
          <p className={s.content__title}>
            Qanday qilib sizga Narxi, Vaqti va Sifati to'g'ri keladigan kursni
            tanlash?
          </p>
        </div>
        <div className={s.content__item}>
          <video src=""></video>
          <p className={s.content__title}>
            Nega bizda Speaking va Writing'dan past ball chiqadi? Bu muammoga
            eng to'g'ri yechim nimada?
          </p>
        </div>
        <div className={s.content__item}>
          <video src=""></video>
          <p className={s.content__title}>
            Ingliz tilini o'rganishni boshlash va uni har qanday holatda ham
            oxiriga yetkazish texnikasi.
          </p>
        </div>
        <div className={s.content__item}>
          <video src=""></video>
          <p className={s.content__title}>
            Ish, o'qish va shaxsiy hayotga chalg'imagan holda mustaqil o'rgansa
            ham bo'ladi! Qanday qilib?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
