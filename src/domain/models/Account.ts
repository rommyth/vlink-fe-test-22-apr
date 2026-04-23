export interface Account {
  id: string;
  email: string;
  photo?: string;
  name?: string;
  loggedBy: 'google | email';
}
