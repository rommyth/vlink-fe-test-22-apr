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
import { Spacer } from '../components/atoms';
import { CardBoardItem, CardUserItem } from '../components/organisms';

const Home = () => {
  const { account, navigateToDetailUser } = useHome();

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
          body={account?.email}
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
              <CardUserItem
                key={index.toString()}
                user={item}
                index={index}
                onPress={() => navigateToDetailUser()}
              />
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
