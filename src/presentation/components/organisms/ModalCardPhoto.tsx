import { View, Text, Modal, Image } from 'react-native';
import React from 'react';
import tw from '../../../shared/libs/tailwindInstance';
import { Photo } from '../../../domain/models/Photo';

type ModalCardPhotoProps = {
  visible: boolean;
  onClose?: () => void;
  data?: Photo;
};

const ModalCardPhoto = ({ data, visible, onClose }: ModalCardPhotoProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="fade"
    >
      <View
        style={tw`flex-1 items-center justify-center bg-black/40`}
        onTouchEnd={onClose}
      >
        <View
          style={tw`w-[90%] lg:max-w-sm bg-white dark:bg-neutral-800 p-4 rounded-md`}
        >
          <Image
            source={{ uri: data?.url }}
            resizeMethod="auto"
            resizeMode="contain"
            style={tw`w-full aspect-square`}
          />

          <Text
            style={tw`font-medium text-lg text-black dark:text-white mt-4 text-center`}
          >
            {data?.title}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCardPhoto;
