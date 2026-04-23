import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import tw from '../../../shared/libs/tailwindInstance';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';

type TextInputPrimaryProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureEntry?: boolean;
  label?: string;
  errorMessage?: string;
};

const TextInputPrimary = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureEntry,
  errorMessage,
}: TextInputPrimaryProps) => {
  const [isSecureEntry, setIsSecureEntry] = useState(secureEntry || false);
  const [isFocus, setIsFocus] = useState(false);

  const toggleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return (
    <View style={tw`gap-y-2`}>
      {label && (
        <Text
          style={tw`font-semibold text-sm text-black dark:text-white tracking-widest`}
        >
          {label.toUpperCase()}
        </Text>
      )}

      <View
        style={tw`bg-primary--solid/10 dark:bg-white/10 rounded-xl min-h-15 px-4 flex-row items-center border ${
          isFocus ? 'border-primary--solid' : 'border-transparent'
        }`}
      >
        <TextInput
          style={tw`flex-1 h-full text-base text-black dark:text-white p-0`}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={tw.color('neutral-400')}
          secureTextEntry={isSecureEntry}
        />

        {secureEntry && (
          <TouchableOpacity onPress={toggleSecureEntry}>
            {isSecureEntry ? (
              <EyeSlashIcon style={tw`text-black dark:text-white`} />
            ) : (
              <EyeIcon style={tw`text-black dark:text-white`} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {!!errorMessage && (
        <Text style={tw`font-regular text-sm text-red-500 dark:text-red-400`}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default TextInputPrimary;
