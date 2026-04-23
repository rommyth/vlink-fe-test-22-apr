export interface LoginSchema {
  email: string;
  password: string;
  provider: 'google | email';
}
