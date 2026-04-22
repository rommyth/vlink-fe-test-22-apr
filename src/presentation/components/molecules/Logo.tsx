import { View } from 'react-native';
import React from 'react';
import { SparklesIcon } from 'react-native-heroicons/solid';
import tw from '../../../shared/libs/tailwindInstance';

type LogoProps = {
  size: number;
};

const Logo = ({ size }: LogoProps) => {
  return (
    <View style={tw`p-3 self-start rounded-2xl bg-primary--solid shadow-xl`}>
      <SparklesIcon color={tw.color('white')} size={size} />
    </View>
  );
};

export default Logo;
