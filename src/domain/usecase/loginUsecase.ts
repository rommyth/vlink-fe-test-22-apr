import { login } from '../../data/repository/authRepository';
import { Account } from '../models/Account';
import { LoginSchema } from '../schema/LoginSchema';

export const loginUsecase = async (schema: LoginSchema): Promise<Account> => {
  return await login(schema);
};
