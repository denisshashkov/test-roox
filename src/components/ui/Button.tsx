import React from "react";
import style from "./button.module.scss";

type PropsType = {
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<PropsType> = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className={style.button}>
        {children}
      </button>
    </div>
  );
};
