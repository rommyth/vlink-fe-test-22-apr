export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const mapToPhotoModel = (item: any) => {
  return {
    id: item?.id,
    albumId: item?.albumId,
    title: item?.title,
    url: item?.url,
    thumbnailUrl: item?.thumbnailUrl,
  };
};
