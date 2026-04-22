import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import useDetailUser from '../hooks/useDetailUser';
import { CardBoardItem, TopNavbar } from '../components/organisms';
import tw from '../../shared/libs/tailwindInstance';
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import { Spacer } from '../components/atoms';

const DetailUser = () => {
  const layout = useWindowDimensions();

  const {} = useDetailUser();

  const _renderProfilePict = () => {
    return (
      <View style={tw`flex-row items-center p-4 gap-6`}>
        <Image
          source={{ uri: 'https://placehold.co/150x150.png' }}
          resizeMethod="auto"
          resizeMode="cover"
          style={tw`size-24 rounded-xl`}
        />

        <View>
          <Text style={tw`font-semibold text-black dark:text-white text-3xl`}>
            Leonardo J. Aep
          </Text>
          <Text style={tw`font-semibold text-primary--soft text-xl`}>
            @Amre
          </Text>
        </View>
      </View>
    );
  };

  const _renderInfoUser = () => {
    return (
      <View style={tw`p-4 gap-y-3`}>
        <CardBoardItem
          Icon={EnvelopeIcon}
          title="Contact"
          body={`Rommy@gmail.com\n0878283859`}
        />
        <CardBoardItem
          Icon={GlobeAltIcon}
          title="Website"
          body={`anastasia.net`}
        />
        <CardBoardItem
          Icon={MapPinIcon}
          title="Location"
          body={`Jl. ERwe qwewes`}
        />
      </View>
    );
  };

  const _renderAlbums = () => {
    return (
      <View>
        {/* Title */}
        <View style={tw`p-4 flex-row items-center justify-between`}>
          <View>
            <Text style={tw`font-semibold text-black dark:text-white text-xl`}>
              Current Albums
            </Text>
            <Text style={tw`font-regular text-neutral-500 text-sm`}>
              Lorem ipsum dolor sit amet
            </Text>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Text style={tw`font-regular text-primary--solid`}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content Horizontal List */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[...Array(10)].fill('')}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<Spacer width={3} />}
          ListFooterComponent={<Spacer width={3} />}
          ItemSeparatorComponent={() => <Spacer width={2} />}
          renderItem={() => {
            return (
              <TouchableOpacity
                style={tw`items-center justify-center rounded-full m-1 size-20 bg-primary--solid outline-2 outline-neutral-500/50 outline-offset-2`}
              >
                <Text style={tw`font-bold text-white`}>ALBUM</Text>
                <Text style={tw`font-bold text-white`}>1</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const _renderGallery = () => {
    return (
      <View style={tw`mt-6 h-[${layout.height * 0.67}px]`}>
        <FlatList
          data={[...Array(2000)].fill('')}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          ListFooterComponent={<Spacer height={20} />}
          numColumns={3}
          renderItem={() => {
            return (
              <TouchableOpacity activeOpacity={0.9}>
                <View style={tw`w-[${layout.width / 3}px] aspect-square p-1`}>
                  <Image
                    source={{ uri: 'https://placehold.co/150x150.png' }}
                    resizeMethod="auto"
                    resizeMode="cover"
                    style={tw`w-full h-full`}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-neutral-100 dark:bg-neutral-900`}>
      <TopNavbar />

      <ScrollView showsVerticalScrollIndicator={false}>
        {_renderProfilePict()}
        {_renderInfoUser()}
        {_renderAlbums()}
        {_renderGallery()}
      </ScrollView>
    </View>
  );
};

export default DetailUser;
