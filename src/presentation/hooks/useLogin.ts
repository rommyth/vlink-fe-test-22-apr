import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenProps } from '../navigations/AppNavigationTypes';
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function useLogin() {
  const { navigate } = useNavigation<LoginScreenProps['navigation']>();

  // Sigin Google
  const handleSignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response);
      alert(JSON.stringify(response, 0, 2));
    } catch (error: any) {
      console.log(error);
      alert(JSON.stringify(error, 0, 2));
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            console.log('IN_PROGRESS');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            console.log('PLAY_SERVICES_NOT_AVAILABLE');
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
        console.log('Error Something wen wrong');
      }
    }
  };

  const navigateToHome = () => {
    navigate('Home');
  };

  return { navigateToHome, handleSignInGoogle };
}
