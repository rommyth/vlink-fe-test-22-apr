import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { User } from '../../domain/models/User';

export type AppNavigationParams = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  DetailUser: { item: User };
};

export type SplashScreenProps = NativeStackScreenProps<
  AppNavigationParams,
  'Splash'
>;

export type LoginScreenProps = NativeStackScreenProps<
  AppNavigationParams,
  'Login'
>;

export type HomeScreenProps = NativeStackScreenProps<
  AppNavigationParams,
  'Home'
>;

export type DetailUserScreenProps = NativeStackScreenProps<
  AppNavigationParams,
  'DetailUser'
>;
