import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { UserContext } from "../../context/Context";
import style from "./profile.module.scss";
import { ProfileForm } from "./../forms/ProfileForm";
import { useParams } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const params = useParams();
  const paramsId = Number(params.id);
  const data = useContext(UserContext);

  useEffect(() => {
    data?.getProfile(paramsId);
    return () => {
      data?.unsubscribeProfile();
    };
  }, []);
  const editHandler = () => {
    setReadOnly(false);
    setDisabled(true);
  };
  return (
    <div className={style.profile}>
      <div className={style.profile__edit}>
        <h2>Профиль пользователя</h2>
        <Button disabled={disabled} onClick={editHandler}>
          Редактировать
        </Button>
      </div>
      <ProfileForm
        profile={data?.profile}
        profileAddress={data?.profile.address}
        readOnly={readOnly}
      />
    </div>
  );
};

export default ProfilePage;
