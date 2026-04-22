import { View, Text } from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';

/**
 * CardBoardItem component
 *
 * @param Icon - React component for icon.
 * ⚠️ Should use Heroicons (e.g. HomeIcon from @react-native-heroicons)
 * @param title - Card title
 * @param body - Card description
 */

type CardBoardItemProps = {
  Icon: React.ComponentType<any>;
  title: string;
  body: string;
};

const CardBoardItem = ({ Icon, title, body }: CardBoardItemProps) => {
  return (
    <View
      style={tw`bg-white dark:bg-neutral-700 rounded-xl p-4 shadow-md overflow-hidden`}
    >
      <View style={tw`absolute -top-6 -right-7 -rotate-20`}>
        <Icon style={tw`text-neutral-100 dark:text-neutral-800`} size={120} />
      </View>
      <View style={tw`flex-row items-center gap-3 mb-2`}>
        <View style={tw`p-2 rounded-3xl bg-primary--solid`}>
          <Icon style={tw`text-white`} size={18} />
        </View>
        <Text style={tw`font-semibold text-neutral-400 tracking-widest`}>
          {title}
        </Text>
      </View>

      <Text style={tw`font-semibold text-black dark:text-white text-lg`}>
        {body}
      </Text>
    </View>
  );
};

export default CardBoardItem;
