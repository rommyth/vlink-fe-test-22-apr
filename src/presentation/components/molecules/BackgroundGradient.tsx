import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { useAppColorScheme } from 'twrnc';
import tw from '../../../shared/libs/tailwindInstance';
import LinearGradient from 'react-native-linear-gradient';

type BackgroundGradientProps = {
  colors?: (string | number)[];
  darkModeColors?: (string | number)[];
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const BackgroundGradient = ({
  colors = [tw.color('white')!, tw.color('blue-100')!],
  darkModeColors = [tw.color('neutral-800')!, tw.color('primary--dark')!],
  style,
  children,
}: BackgroundGradientProps) => {
  const [colorScheme] = useAppColorScheme(tw);

  return (
    <LinearGradient
      colors={colorScheme == 'dark' ? darkModeColors : colors}
      style={[tw`flex-1`, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
