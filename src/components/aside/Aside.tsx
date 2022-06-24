import React, { useContext, useState } from "react";
import { Button } from "../ui/Button";
import { UserContext } from "../../context/Context";

import style from "./aside.module.scss";

const Aside: React.FC = () => {
  const [disabledNameButton, setDisabledNameButton] = useState<boolean>(false);
  const [disabledCityButton, setDisabledCityButton] = useState<boolean>(false);
  const data = useContext(UserContext);

  //фильтрация по имени
  const filterNameHandler = () => {
    if (data?.usersCount !== 0) {
      //вызываем callback из контекста
      data?.filterName();
      setDisabledNameButton(true);
      setDisabledCityButton(false);
    }
  };

  //фильтрация по городу
  const filterCityHandler = () => {
    if (data?.usersCount !== 0) {
      //вызываем callback из контекста
      data?.filterCity();
      setDisabledCityButton(true);
      setDisabledNameButton(false);
    }
  };

  return (
    <div className={style.aside}>
      <div className={style.aside__buttons__block}>
        <h3>Сортировка</h3>
        <Button disabled={disabledNameButton} onClick={filterNameHandler}>
          по имени
        </Button>
        <Button disabled={disabledCityButton} onClick={filterCityHandler}>
          по городу
        </Button>
      </div>
    </div>
  );
};

export default Aside;
