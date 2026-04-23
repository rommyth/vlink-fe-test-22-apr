import { getPhotosByAlbumId } from '../../data/repository/photoRepository';
import { Photo } from '../models/Photo';
import { GetPhotosByAlbumIdSchema } from '../schema/GetPhotosByAlbumIdSchema';

export const getPhotosByAlbumIdUsecase = async (
  schema: GetPhotosByAlbumIdSchema,
): Promise<Photo[]> => {
  return await getPhotosByAlbumId(schema);
};
