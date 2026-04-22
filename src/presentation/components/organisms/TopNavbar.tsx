import { View, Text, TouchableOpacity, useAnimatedColor } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../../../shared/libs/tailwindInstance';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const TopNavbar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      edges={['top']}
      style={tw`bg-white dark:bg-neutral-800 shadow-md flex-row items-center`}
    >
      <TouchableOpacity style={tw`p-4`} onPress={navigation.goBack}>
        <ArrowLeftIcon style={tw`text-primary--solid`} strokeWidth={2} />
      </TouchableOpacity>
      <Text style={tw`font-semibold text-base text-black dark:text-white`}>
        Member Profile
      </Text>
    </SafeAreaView>
  );
};

export default TopNavbar;
