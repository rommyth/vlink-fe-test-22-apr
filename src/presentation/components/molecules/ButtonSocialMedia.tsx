import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';

type ButtonSocialMediaProps = {
  logo: ImageSourcePropType;
  text: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
};

const ButtonSocialMedia = ({
  logo,
  text,
  onPress,
  bgColor = '#FFF',
  textColor = '#000',
}: ButtonSocialMediaProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View
        style={tw`p-5 rounded-xl bg-[${bgColor}] flex-row items-center justify-center gap-2 border border-neutral-500/20`}
      >
        <Image
          source={logo}
          resizeMethod="auto"
          resizeMode="contain"
          style={tw`size-6`}
        />
        <Text
          style={tw`font-semibold text-[${textColor}] text-base text-center tracking-widest`}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSocialMedia;
