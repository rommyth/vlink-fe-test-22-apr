import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import useDetailUser from '../hooks/useDetailUser';
import {
  CardBoardItem,
  TopNavbar,
  ModalCardPhoto,
  ListEmptyComponent,
} from '../components/organisms';
import tw from '../../shared/libs/tailwindInstance';
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';
import { Spacer } from '../components/atoms';

const DetailUser = () => {
  const layout = useWindowDimensions();

  const {
    user,
    selectedAlbumId,
    handleSelectAlbumId,
    listAlbum,
    isLaodingListAlbum,
    selectedPhoto,
    setSelectedPhoto,
    listPhoto,
    fetchNextPage,
    hasNextPage,
    flatListPhotoRef,
    isFetching,
  } = useDetailUser();

  const _renderProfilePict = () => {
    return (
      <View style={tw`flex-row items-center p-4 gap-6`}>
        <Image
          source={{ uri: 'https://placehold.co/150x150.png' }}
          resizeMethod="auto"
          resizeMode="cover"
          style={tw`size-24 rounded-xl border border-neutral-500`}
        />

        <View>
          <Text style={tw`font-semibold text-black dark:text-white text-3xl`}>
            {user?.name || '-'}
          </Text>
          <Text style={tw`font-semibold text-primary--soft text-xl`}>
            @{user?.username || 'unknown'}
          </Text>
        </View>
      </View>
    );
  };

  const _renderInfoUser = () => {
    const fullAddress = `${user?.address.street}, ${user?.address.suite}, ${user?.address.city}, ${user?.address.zipcode}`;
    return (
      <View style={tw`p-4 gap-y-3`}>
        <CardBoardItem
          Icon={EnvelopeIcon}
          title="Contact"
          body={`${user?.email}\n${user?.phone}`}
        />
        <CardBoardItem
          Icon={GlobeAltIcon}
          title="Website"
          body={user?.website || '-'}
        />
        <CardBoardItem Icon={MapPinIcon} title="Location" body={fullAddress} />
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
          data={listAlbum}
          keyExtractor={item => `album-${item?.id}`}
          ListEmptyComponent={
            <ListEmptyComponent
              iconSize={24}
              message="No album exist"
              width={layout.width - 24}
              height={72}
            />
          }
          ListHeaderComponent={<Spacer width={3} />}
          ListFooterComponent={<Spacer width={3} />}
          ItemSeparatorComponent={() => <Spacer width={2} />}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => handleSelectAlbumId(item.id)}
                style={tw`items-center justify-center rounded-full mx-1 my-1.5 size-20 bg-primary--solid outline-4 outline-offset-2 ${
                  selectedAlbumId == item.id
                    ? 'outline-primary--solid'
                    : 'outline-neutral-500/50'
                }`}
              >
                <Text style={tw`font-bold text-white text-xs`}>ALBUM</Text>
                <Text style={tw`font-bold text-white text-3xl`}>{item.id}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const _renderGallery = () => {
    const listPhotoFlat = listPhoto?.pages.flat() ?? [];
    return (
      <View style={tw`mt-6 h-[${layout.height * 0.67}px]`}>
        <FlatList
          ref={flatListPhotoRef}
          data={listPhotoFlat}
          keyExtractor={(item, index) => `photo-${item.id}`}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onEndReached={() => {
            if (hasNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            <>
              <Spacer height={4} />
              {isFetching && (
                <ActivityIndicator color={tw.color('neutral-400')} size={32} />
              )}
              <Spacer height={20} />
            </>
          }
          ListHeaderComponent={
            <View style={tw`w-full h-[1px] bg-neutral-500/30`} />
          }
          ListEmptyComponent={
            <ListEmptyComponent
              iconSize={60}
              message="No photo from selected album"
              height={150}
            />
          }
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelectedPhoto(item)}
              >
                <View
                  style={tw`w-[${layout.width / 3}px] aspect-square p-0.25`}
                >
                  <Image
                    source={{ uri: item.url }}
                    resizeMethod="auto"
                    resizeMode="cover"
                    style={tw`w-full h-full bg-neutral-300 dark:bg-white/10`}
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

      <ModalCardPhoto
        visible={!!selectedPhoto}
        data={selectedPhoto ?? undefined}
        onClose={() => setSelectedPhoto(null)}
      />
    </View>
  );
};

export default DetailUser;
