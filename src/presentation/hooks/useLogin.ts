import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenProps } from '../navigations/AppNavigationTypes';

export default function useLogin() {
  const { navigate } = useNavigation<LoginScreenProps['navigation']>();

  const navigateToHome = () => {
    navigate('Home');
  };

  return { navigateToHome };
}
