import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

const setItem = async (key: string, value: string): Promise<void> => {
  await RNSecureStorage.setItem(key, value, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
};

const getItem = async (key: string): Promise<string | null> => {
  try {
    const value = await RNSecureStorage.getItem(key);
    return value;
  } catch (error) {
    return null;
  }
};

const removeItem = async (key: string): Promise<void> => {
  await RNSecureStorage.removeItem(key);
};

const clear = async (): Promise<void> => {
  await RNSecureStorage.clear();
};

const SecureStorageService = {
  setItem,
  getItem,
  removeItem,
  clear,
};

export default SecureStorageService;
