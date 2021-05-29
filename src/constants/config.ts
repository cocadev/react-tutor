const DEFAULT_CONFIG = {
  apiUrl: 'https://d-api-gateway.tuttify.io/graphql',
  appKey: '740b34b2-4af3-4413-959e-75a1f6d9eecd',
};

export const BASE_API_URL = process.env.REACT_APP_API_URL || DEFAULT_CONFIG.apiUrl;
export const APP_KEY = process.env.REACT_APP_APP_KEY || DEFAULT_CONFIG.appKey;
