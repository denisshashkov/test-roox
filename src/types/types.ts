export type GeoType = {
  lat: string;
  lng: string;
};

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

export type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserType = {
  address: AddressType;
  company: CompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type UserContextType = {
  filterName: () => void;
  unsubscribeProfile: () => void;
  unsubscribeUsers: () => void;
  getUsers: () => void;
  getProfile: (id: number) => void;
  filterCity: () => void;
  users: UserType[];
  profile: UserType;
  usersCount: number;
};
