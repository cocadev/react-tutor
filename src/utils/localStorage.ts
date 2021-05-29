const STORAGE_KEYS = {
  token: 'token',
};

export const getToken = () => localStorage.getItem(STORAGE_KEYS.token);

export const saveToken = (token?: string) => {
  token && localStorage.setItem(STORAGE_KEYS.token, token);
};

export const clearAuthData = () => localStorage.removeItem(STORAGE_KEYS.token);
