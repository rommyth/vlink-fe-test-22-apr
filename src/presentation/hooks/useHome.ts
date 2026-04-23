import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../navigations/AppNavigationTypes';
import { useMMKV, useMMKVObject } from 'react-native-mmkv';
import { Account } from '../../domain/models/Account';
import { STORAGE_KEY } from '../../shared/libs/storageInstnace';

export default function useHome() {
  const { navigate } = useNavigation<HomeScreenProps['navigation']>();
  const [account] = useMMKVObject<Account>(STORAGE_KEY.ACCOUNT);

  const navigateToDetailUser = () => {
    navigate('DetailUser');
  };

  return { account, navigateToDetailUser };
}
