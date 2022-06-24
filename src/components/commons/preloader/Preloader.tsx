import React from "react";
import style from "./preloader.module.scss";

const Preloader: React.FC = () => {
  return (
    <div>
      <div className={style.loading}></div>
    </div>
  );
};

export default Preloader;
