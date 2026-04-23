import { Album, mapToAlbumModel } from '../../domain/models/Album';
import { GetAlbumByUserIdSchema } from '../../domain/schema/GetAlbumByUserIdSchema';
import { httpClient } from '../../shared/libs/axiosInstance';
import { Api } from '../api/api';

export const getAlbumByUserId = async (
  payload: GetAlbumByUserIdSchema,
): Promise<Album[]> => {
  try {
    const response = await httpClient.get(
      Api.getAllAlbumsByUserId(payload.id),
      {
        params: {
          page: payload?.page,
          limit: payload?.limit,
        },
      },
    );

    const mappedResponse: Album[] = response.data.map((item: any) =>
      mapToAlbumModel(item),
    );

    return mappedResponse;
  } catch (error) {
    throw new Error('Fail to get album by user id');
  }
};
