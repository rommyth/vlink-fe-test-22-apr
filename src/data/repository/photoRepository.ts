import { mapToPhotoModel, Photo } from '../../domain/models/Photo';
import { GetPhotosByAlbumIdSchema } from '../../domain/schema/GetPhotosByAlbumIdSchema';
import { httpClient } from '../../shared/libs/axiosInstance';
import { Api } from '../api/api';

export const getPhotosByAlbumId = async (
  payload: GetPhotosByAlbumIdSchema,
): Promise<Photo[]> => {
  try {
    const response = await httpClient.get(Api.getAllPhotos(), {
      params: {
        userId: payload.id,
        page: payload?.page,
        limit: payload?.limit,
      },
    });

    const mappedResponse: Photo[] = response.data.map((item: any) =>
      mapToPhotoModel(item),
    );

    return mappedResponse;
  } catch (error) {
    throw new Error('Fail to get album by user id');
  }
};
