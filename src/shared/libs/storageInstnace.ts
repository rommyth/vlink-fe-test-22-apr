import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'galeryx-storage',
  encryptionKey: 'somespecialcharcternexttime',
  encryptionType: 'AES-128',
});

export const STORAGE_KEY = {
  TOKEN: 'token',
  ACCOUNT: 'account',
};
