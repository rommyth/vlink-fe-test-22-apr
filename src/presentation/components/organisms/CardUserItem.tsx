import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { User } from '../../../domain/models/User';

type CardUserItemProps = {
  user: User;
  index: number;
  onPress: () => void;
};

const CardUserItem = ({ user, index, onPress }: CardUserItemProps) => {
  const initialByName = user?.name.substring(0, 1) || '-';

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View
        style={tw`p-2 bg-white dark:bg-neutral-800 rounded-2xl flex-row items-center shadow-md w-[95%] gap-4 ${
          index % 2 ? 'self-end' : 'self-start'
        }`}
      >
        <View
          style={tw`bg-primary--light rounded-2xl items-center justify-center size-14`}
        >
          <Text style={tw`font-semibold text-primary--solid text-3xl`}>
            {initialByName || '-'}
          </Text>
        </View>

        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-lg text-black dark:text-white`}>
            {user?.name || '-'}
          </Text>
          <Text style={tw`font-regular text-sm text-neutral-400`}>
            {user.email || '-'}
          </Text>
        </View>

        <View style={tw`p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg`}>
          <ArrowRightIcon
            strokeWidth={3}
            style={tw`text-primary--solid dark:text-white`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardUserItem;
