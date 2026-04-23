import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../navigations/AppNavigationTypes';
import { useMMKV, useMMKVObject } from 'react-native-mmkv';
import { Account } from '../../domain/models/Account';
import { STORAGE_KEY } from '../../shared/libs/storageInstnace';
import { useQuery } from '@tanstack/react-query';
import { getAllUsersUsecase } from '../../domain/usecase/getAllUsesrUsecase';
import Toast from 'react-native-toast-message';
import { User } from '../../domain/models/User';

export default function useHome() {
  const { navigate } = useNavigation<HomeScreenProps['navigation']>();
  const [account] = useMMKVObject<Account>(STORAGE_KEY.ACCOUNT);

  // fetch list user
  const {
    data: listUsers,
    isLoading: isLoadingListUsers,
    isRefetching: isRefetchingListUsers,
    refetch: refetchListUsers,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsersUsecase,
    throwOnError: (err: Error) => {
      Toast.show({ type: 'error', text1: 'Error', text2: err?.message });
      return true;
    },
  });

  const navigateToDetailUser = (item: User) => {
    navigate('DetailUser', { item });
  };

  return {
    account,
    listUsers,
    isLoadingListUsers,
    isRefetchingListUsers,
    refetchListUsers,
    navigateToDetailUser,
  };
}
