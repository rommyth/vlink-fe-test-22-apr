import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer = ({ width = 0, height = 0 }: SpacerProps) => {
  return <View style={tw`w-${width} h-${height}`} />;
};

export default Spacer;
