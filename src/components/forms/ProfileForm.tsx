import React from "react";
import { useForm } from "react-hook-form";
import { AddressType, UserType } from "../../types/types";
import { FormData } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./profileForm.module.scss";

type PropsType = {
  profile: UserType | undefined;
  profileAddress: AddressType | undefined;
  readOnly: boolean;
  onSubmit: (data: FormData) => void;
};

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, "the name field cannot contain numbers")
      .required(),
    userName: yup.string().required(),
    email: yup.string().email("email should have correct format").required(),
    street: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup
      .string()
      .matches(/^([^A-Z,a-z]*)$/, "Zip-Code must contain numbers ")
      .required(),
    phone: yup
      .string()
      .matches(/^([^A-Z,a-z]*)$/, "the phone must contain numbers ")
      .required(),
  })
  .required();

export const ProfileForm: React.FC<PropsType> = ({
  profile,
  profileAddress,
  readOnly,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(schema) });
  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className={style.input__wrapper}>
        <label>Name</label>
        <input
          className={errors.name ? style.input__error : ""}
          {...register("name")}
          defaultValue={profile?.name}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.name?.message}</p>
        <label>User name</label>
        <input
          className={errors.userName ? style.input__error : ""}
          {...register("userName")}
          defaultValue={profile?.username}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.userName?.message}</p>
        <label>E-mail</label>
        <input
          className={errors.email ? style.input__error : ""}
          {...register("email")}
          defaultValue={profile?.email}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.email?.message}</p>
        <label>Street</label>
        <input
          className={errors.street ? style.input__error : ""}
          {...register("street")}
          defaultValue={profileAddress?.street}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.street?.message}</p>
        <label>City</label>
        <input
          className={errors.city ? style.input__error : ""}
          {...register("city")}
          defaultValue={profileAddress?.city}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.city?.message}</p>
        <label>Zip code</label>
        <input
          className={errors.zipcode ? style.input__error : ""}
          {...register("zipcode")}
          defaultValue={profileAddress?.zipcode}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.zipcode?.message}</p>
        <label>Phone</label>
        <input
          className={errors.phone ? style.input__error : ""}
          {...register("phone")}
          defaultValue={profile?.phone}
          readOnly={readOnly}
        />
        <p className={style.error__text}>{errors.phone?.message}</p>
        <label>Website</label>
        <input
          {...register("website")}
          defaultValue={profile?.website}
          readOnly={readOnly}
        />
        <label>Comment</label>
        <textarea {...register("comment")} />
      </div>
      <button disabled={!isValid} type="submit" className={style.submitButton}>
        ??????????????????
      </button>
    </form>
  );
};
