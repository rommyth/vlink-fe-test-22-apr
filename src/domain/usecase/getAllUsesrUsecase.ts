import { getAllUsers } from '../../data/repository/userRepository';
import { User } from '../models/User';

export const getAllUsersUsecase = async (): Promise<User[]> => {
  return await getAllUsers();
};
