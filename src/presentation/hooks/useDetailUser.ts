import { useRoute } from '@react-navigation/native';
import { DetailUserScreenProps } from '../navigations/AppNavigationTypes';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { useRef, useState } from 'react';
import { getAlbumByUserIdUsecase } from '../../domain/usecase/getAlbumsByUserIdUsecase';
import { getPhotosByAlbumIdUsecase } from '../../domain/usecase/getPhotosByAlbumIdUsecase';
import { FlatList } from 'react-native';
import { Photo } from '../../domain/models/Photo';

export default function useDetailUser() {
  const route = useRoute<DetailUserScreenProps['route']>();

  // user data
  const user = route.params.item;

  const flatListPhotoRef = useRef<FlatList<Photo>>(null);

  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // fetch data albums
  const { data: listAlbum, isLoading: isLaodingListAlbum } = useQuery({
    queryKey: ['albums', user.id],
    queryFn: () => getAlbumByUserIdUsecase({ id: user.id }),
    throwOnError: (err: Error) => {
      Toast.show({ type: 'error', text1: 'Error', text2: err?.message });
      return true;
    },
  });

  // Fetch infinite scroll
  const {
    data: listPhoto,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['photos', selectedAlbumId],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) =>
      await getPhotosByAlbumIdUsecase({
        id: selectedAlbumId!,
        limit: 15,
        page: pageParam,
      }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 9) return undefined;
      return pages.length + 1;
    },
    enabled: !!selectedAlbumId,
  });

  const handleSelectAlbumId = (albumId: number) => {
    setSelectedAlbumId(albumId);
    flatListPhotoRef?.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  return {
    user,
    selectedPhoto,
    setSelectedPhoto,
    selectedAlbumId,
    handleSelectAlbumId,
    listAlbum,
    isLaodingListAlbum,
    flatListPhotoRef,
    listPhoto,
    hasNextPage,
    fetchNextPage,
    isFetching,
  };
}
