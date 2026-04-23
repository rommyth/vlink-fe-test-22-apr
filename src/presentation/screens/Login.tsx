import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import tw from '../../shared/libs/tailwindInstance';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ButtonPrimary,
  TextInputPrimary,
  Logo,
  BackgroundGradient,
} from '../components/molecules';
import { Spacer } from '../components/atoms';
import ButtonSocialMedia from '../components/molecules/ButtonSocialMedia';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const { handleSignInGoogle, navigateToHome } = useLogin();

  const _renderLogo = () => {
    return (
      <View style={tw`flex-row items-center gap-3`}>
        <Logo size={28} />
        <Text style={tw`font-bold text-primary--solid text-xl`}>GALERYX</Text>
      </View>
    );
  };

  const _renderGreeting = () => {
    return (
      <View style={tw`mt-8`}>
        <Text style={tw`font-bold text-black dark:text-white text-5xl`}>
          Welcome
        </Text>
        <Text
          style={tw`font-medium text-neutral-600 dark:text-white text-base mt-2`}
        >
          Some inpirations that build you up
        </Text>
      </View>
    );
  };

  const _renderForm = () => {
    return (
      <View style={tw`mt-16 gap-y-6`}>
        <TextInputPrimary
          label="Email Address"
          onChangeText={text => console.log(text)}
        />
        <TextInputPrimary label="Password" secureEntry={true} />
        <Spacer height={4} />
        <ButtonPrimary text="LOGIN" onPress={navigateToHome} />
        <Text style={tw`text-center tracking-widest text-neutral-500/50`}>
          OR
        </Text>
        <ButtonSocialMedia
          logo={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s',
          }}
          text="Sign in with Google"
          onPress={handleSignInGoogle}
        />
      </View>
    );
  };

  return (
    <BackgroundGradient>
      <KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={tw`p-4`}
            showsVerticalScrollIndicator={false}
          >
            {_renderLogo()}
            {_renderGreeting()}
            {_renderForm()}
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </BackgroundGradient>
  );
};

export default Login;
