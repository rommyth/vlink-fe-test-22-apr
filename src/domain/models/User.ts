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
