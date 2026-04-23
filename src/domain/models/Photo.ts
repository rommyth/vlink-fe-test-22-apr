export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

export const mapToPhotoModel = (item: any) => {
  return {
    id: item?.id,
    albumId: item?.albumId,
    title: item?.title,
    // replace photo karna gambar dari jsonplacheholder mati websitenya
    url: `https://picsum.photos/${item.id}`,
  };
};
