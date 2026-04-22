import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../navigations/AppNavigationTypes';

export default function useHome() {
  const { navigate } = useNavigation<HomeScreenProps['navigation']>();

  const navigateToDetailUser = () => {
    navigate('DetailUser');
  };

  return { navigateToDetailUser };
}
