import React from "react";
import s from "./style.module.scss";
import Showcase from "../../components/Showcase";
import Content from "../../components/Content";

const Page1 = () => {
  return (
    <div>
      <div className={s.showcase}>
        <div className="container">
          <Showcase />
        </div>
      </div>
      <div className={s.content}>
      <div className="container">
      <Content />
        </div>
      </div>
    </div>
  );
};

export default Page1;
