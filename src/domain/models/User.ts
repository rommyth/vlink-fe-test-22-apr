export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: UserAddress;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export const mapToUserModel = (item: any): User => {
  return {
    id: item?.id,
    name: item?.name,
    email: item?.email,
    phone: item?.phone,
    website: item?.website,
    address: {
      street: item?.street,
      suite: item?.suite,
      city: item?.city,
      zipcode: item?.zipcode,
    },
  };
};
