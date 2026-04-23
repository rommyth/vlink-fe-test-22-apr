import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';
import { SparklesIcon } from 'react-native-heroicons/solid';

type ListEmptyComponentProps = {
  width?: number;
  height?: number;
  iconSize?: number;
  message?: string;
};

const ListEmptyComponent = ({
  width,
  height,
  iconSize = 60,
  message,
}: ListEmptyComponentProps) => {
  return (
    <View
      style={[
        tw`items-center justify-center gap-y-4`,
        { width: width ?? '100%', height },
      ]}
    >
      <SparklesIcon
        style={tw`text-neutral-300 dark:text-neutral-300`}
        size={iconSize}
      />
      <Text
        style={tw`font-semibold text-neutral-500 dark:text-white text-sm text-center`}
      >
        {message}
      </Text>
    </View>
  );
};

export default ListEmptyComponent;
