import { useNavigation } from '@react-navigation/native';
import { LoginScreenProps } from '../navigations/AppNavigationTypes';
import Toast from 'react-native-toast-message';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { loginUsecase } from '../../domain/usecase/loginUsecase';
import { LoginSchema } from '../../domain/schema/LoginSchema';
import { useMMKVObject, useMMKVString } from 'react-native-mmkv';
import { STORAGE_KEY } from '../../shared/libs/storageInstnace';
import { Account } from '../../domain/models/Account';

const tempEmail = 'rommyth@mail.com';
const tempPassword = 'testing123';

export default function useLogin() {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const [token, setToken] = useMMKVString(STORAGE_KEY.TOKEN);
  const [account, setAccount] = useMMKVObject<Account>(STORAGE_KEY.ACCOUNT);

  // Form State
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Login Mutation
  const { mutate: _loginMutate, isPending: isLoginPending } = useMutation({
    mutationFn: loginUsecase,
    onSuccess: res => {
      setToken(res.token);
      setAccount({
        email: res.email,
      });
      navigateToHome();
    },
    throwOnError: err => {
      console.log(err);
      return true;
    },
  });

  // Submit Login Email
  const handleLogin = handleSubmit(data => {
    if (data.email != tempEmail || data.password != tempPassword) {
      Toast.show({ type: 'error', text1: 'Invalid email or password' });
      return;
    }

    const payload: LoginSchema = {
      email: data.email,
      password: data.password,
    };

    _loginMutate(payload);
  });

  // Sigin Google
  const handleSignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      const payload: LoginSchema = {
        email: response.data?.user.email!,
        password: '',
        idToken: response.data?.idToken!,
      };

      _loginMutate(payload);
    } catch (error: any) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            Toast.show({ type: 'error', text1: error.message });
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Toast.show({ type: 'error', text1: error.message });
            break;
          default:
            // some other error happened
            Toast.show({ type: 'error', text1: error.message });
        }
      } else {
        Toast.show({ type: 'error', text1: error.message });
      }
    }
  };

  const navigateToHome = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  return {
    control,
    errors,
    isLoginPending,
    handleSignInGoogle,
    handleLogin,
    navigateToHome,
  };
}
