import { Account } from '../../domain/models/Account';
import { LoginSchema } from '../../domain/schema/LoginSchema';
import { createJWTToken } from '../../shared/utils/generateToken';

export const login = async (payload: LoginSchema): Promise<Account> => {
  try {
    const token = await createJWTToken(payload.email);
    return {
      email: payload.email,
      token: token,
    };
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};
