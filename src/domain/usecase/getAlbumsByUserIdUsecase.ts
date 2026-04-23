import { getAlbumByUserId } from '../../data/repository/albumRepository';
import { Album } from '../models/Album';
import { GetAlbumByUserIdSchema } from '../schema/GetAlbumByUserIdSchema';

export const getAlbumByUserIdUsecase = async (
  schema: GetAlbumByUserIdSchema,
): Promise<Album[]> => {
  return await getAlbumByUserId(schema);
};
