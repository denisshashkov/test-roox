import React from "react";
import { Link } from "react-router-dom";
import style from "./user.module.scss";

type propsType = {
  id: number;
  userName: string;
  city: string;
  company: string;
};

const User: React.FC<propsType> = ({ userName, city, company, id }) => {
  return (
    <div className={style.user}>
      <div className={style.user__block}>
        <span className={style.user__block__data}>ФИО:</span>
        <span>{userName}</span>
      </div>
      <div className={style.user__block}>
        <span className={style.user__block__data}>город:</span>
        <span>{city}</span>
      </div>
      <div className={style.user__block}>
        <span className={style.user__block__data}>компания:</span>
        <span>{company}</span>
        <Link to={`/profile/${id}`}>
          <span className={style.user__block__detail}>Подробнее</span>
        </Link>
      </div>
    </div>
  );
};

export default User;
