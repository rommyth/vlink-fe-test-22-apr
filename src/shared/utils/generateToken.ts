import { decode, sign } from 'react-native-pure-jwt';
import { TOKEN_SECRET } from './constant.secret';

export const createJWTToken = async (email: string): Promise<string | any> => {
  try {
    const token = await sign(
      {
        iss: email,
        exp: new Date().getTime() + 3600,
        additional: {
          email: email,
        },
      },
      TOKEN_SECRET, // secret
      {
        alg: 'HS256',
      },
    );

    return token;
  } catch (err) {
    console.error('createJWTToken : ', err);
    return err;
  }
};

export const validateJWTToken = async (
  token: string,
): Promise<boolean | any> => {
  try {
    const isValid = await decode(
      token, // the token
      TOKEN_SECRET, // the secret
      {
        skipValidation: true, // to skip signature and exp verification
      },
    );

    return !!isValid;
  } catch (err) {
    console.error('validateJWTToken : ', err);
    return err;
  }
};
