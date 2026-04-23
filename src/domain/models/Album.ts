export interface Album {
  id: number;
  userId: number;
  title: string;
}

export const mapToAlbumModel = (item: any): Album => {
  return {
    id: item?.id,
    userId: item?.userId,
    title: item?.title,
  };
};
