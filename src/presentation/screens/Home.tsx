import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useHome from '../hooks/useHome';
import tw from '../../shared/libs/tailwindInstance';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackgroundGradient, Logo } from '../components/molecules';
import { EnvelopeIcon } from 'react-native-heroicons/solid';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { Spacer } from '../components/atoms';
import CardBoardItem from '../components/molecules/CardBoardItem';

const Home = () => {
  const {} = useHome();

  const _renderNavbar = () => {
    return (
      <SafeAreaView edges={['top']} style={tw`p-4 flex-row items-center gap-2`}>
        <Logo size={20} />
        <Text style={tw`font-semibold text-2xl text-black dark:text-white`}>
          Galeryx
        </Text>
      </SafeAreaView>
    );
  };

  const _renderVerifyEmail = () => {
    return (
      <View style={tw`p-4`}>
        <CardBoardItem
          Icon={EnvelopeIcon}
          title="YOUR EMAIL"
          body="rommy.taufik@gmail.com"
        />
      </View>
    );
  };

  const _renderList = () => {
    return (
      <View
        style={tw`bg-primary--solid dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-t-[39px] p-4 flex-1`}
      >
        <FlatList
          style={tw`flex-1 rounded-3xl`}
          data={[...Array(20)].fill('*')}
          keyExtractor={(item, index) => `${item}-${index}`}
          ItemSeparatorComponent={() => <Spacer height={5} />}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {}} activeOpacity={0.9}>
                <View
                  style={tw`p-2 bg-white dark:bg-neutral-800 rounded-2xl flex-row items-center shadow-md w-[95%] gap-4 ${
                    index % 2 ? 'self-end' : 'self-start'
                  }`}
                >
                  <View
                    style={tw`bg-primary--light rounded-2xl items-center justify-center size-14`}
                  >
                    <Text
                      style={tw`font-semibold text-primary--solid text-3xl`}
                    >
                      E
                    </Text>
                  </View>

                  <View style={tw`flex-1`}>
                    <Text
                      style={tw`font-bold text-lg text-black dark:text-white`}
                    >
                      Ervin Howell
                    </Text>
                    <Text style={tw`font-regular text-sm text-neutral-400`}>
                      example@mail.com
                    </Text>
                  </View>

                  <View
                    style={tw`p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg`}
                  >
                    <ArrowRightIcon
                      strokeWidth={3}
                      style={tw`text-primary--solid dark:text-white`}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <BackgroundGradient>
      <View style={tw`flex-1`}>
        {_renderNavbar()}
        {_renderVerifyEmail()}
        {_renderList()}
      </View>
    </BackgroundGradient>
  );
};

export default Home;
