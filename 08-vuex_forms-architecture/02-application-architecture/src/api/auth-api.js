import { httpClient } from '@/api/http-client';

export const authApi = {
  getUser() {
    return httpClient.get('/auth/user');
  },

  register(user) {
    return httpClient.post('/auth/register', user);
  },
};
