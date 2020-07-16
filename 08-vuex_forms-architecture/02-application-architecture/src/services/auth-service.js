import { authApi } from '@/api/auth-api';

export const authService = {
  register(user) {
    return authApi.register(user);
  },

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  },
};
