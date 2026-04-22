import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppNavigationParams = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  DetailUser: undefined;
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
