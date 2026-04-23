export const Api = {
  getAllUsers: () => `/users`,
  getAllAlbumsByUserId: (userId: number) => `/users/${userId}/albums`,
  getAllPhotosByAlbumId: (albumId: number) => `/albums/${albumId}/photos`,
};
