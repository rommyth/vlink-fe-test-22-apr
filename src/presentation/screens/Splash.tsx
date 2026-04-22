import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from '../../shared/libs/tailwindInstance';
import { SparklesIcon } from 'react-native-heroicons/solid';
import useSplash from '../hooks/useSplash';
import { BackgroundGradient } from '../components/molecules';

const Splash = () => {
  const {} = useSplash();

  return (
    <BackgroundGradient>
      <View style={tw`flex-1 items-center justify-center`}>
        <View style={tw`p-6 rounded-3xl bg-primary--solid shadow-xl`}>
          <SparklesIcon color={tw.color('white')} size={100} />
          <Text style={tw`font-bold text-center text-white mt-2 text-2xl`}>
            GALERYX
          </Text>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default Splash;
