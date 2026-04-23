import { mapToUserModel, User } from '../../domain/models/User';
import { httpClient } from '../../shared/libs/axiosInstance';
import { Api } from '../api/api';

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await httpClient.get(Api.getAllUsers());

    const mappedResponse: User[] = response.data.map((item: any) =>
      mapToUserModel(item),
    );

    return mappedResponse;
  } catch (error) {
    throw new Error('Fail to get album by user id');
  }
};
