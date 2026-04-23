import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from '../../../shared/libs/tailwindInstance';

type ButtonPrimaryProps = {
  text: string;
  onPress: () => void;
  loading?: boolean;
};

const ButtonPrimary = ({ text, onPress, loading }: ButtonPrimaryProps) => {
  return (
    <TouchableOpacity disabled={loading} onPress={onPress} activeOpacity={0.9}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[tw.color('primary--soft')!, tw.color('primary--solid')!]}
        style={tw`p-5 rounded-xl`}
      >
        {loading ? (
          <ActivityIndicator color={tw.color('white')} size={24} />
        ) : (
          <Text
            style={tw`font-semibold text-white text-base text-center tracking-widest`}
          >
            {text}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
