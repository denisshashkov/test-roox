import React, { useEffect, useContext } from "react";
import User from "./User";
import style from "./user.module.scss";
import { UserType } from "../../types/types";
import { UserContext } from "../../context/Context";

const UsersPage: React.FC = () => {
  const data = useContext(UserContext);

  useEffect(() => {
    data?.getUsers();
    return () => {
      data?.unsubscribeUsers();
    };
  }, []);
  return (
    <div>
      <h2>Список пользователей</h2>
      <div className={style.user__list}>
        {data?.users.map((user: UserType) => (
          <User
            key={user.id}
            userName={user.name}
            city={user.address.city}
            company={user.company.name}
            id={user.id}
          />
        ))}
      </div>
      <div className={style.user__count}>
        <span>Найдено {data?.usersCount} пользователей</span>
      </div>
    </div>
  );
};
export default UsersPage;
