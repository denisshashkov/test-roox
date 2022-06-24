import React, { useState, createContext } from "react";
import { userService } from "../Api/api";
import { UserContextType, UserType } from "../types/types";

export const UserContext = createContext<UserContextType | null>(null);

type PropsType = {
  children: JSX.Element;
};

export const Context: React.FC<PropsType> = (props) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [profile, setProfile] = useState<UserType>({} as UserType);
  // получаем пользователей с сервера и добавляем в state
  const getUsers = async () => {
    const users = await userService.getUsers();
    setUsers(users);
  };
  // получаем профиль с сервера и добавляем в state
  const getProfile = async (id: number) => {
    const profile = await userService.getProfile(id);
    setProfile(profile);
  };
  const unsubscribeUsers = () => {
    setUsers([]);
  };

  const unsubscribeProfile = () => {
    setProfile({} as UserType);
  };
  //получаем кол-во пользователей
  const usersCount = users.length;
  //фильтрация имен по алфавиту
  const filterName = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };
  //фильтрация городов по алфавиту
  const filterCity = () => {
    setUsers(
      [...users].sort((a, b) => a.address.city.localeCompare(b.address.city))
    );
  };

  const value = {
    users,
    usersCount,
    filterName,
    filterCity,
    getUsers,
    getProfile,
    profile,
    unsubscribeProfile,
    unsubscribeUsers,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
