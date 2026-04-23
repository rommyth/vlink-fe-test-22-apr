export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
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
    username: item?.username,
    address: {
      street: item?.address.street,
      suite: item?.address.suite,
      city: item?.address.city,
      zipcode: item?.address.zipcode,
    },
  };
};
