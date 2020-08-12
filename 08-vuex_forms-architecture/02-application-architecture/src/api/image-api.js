import { httpClient } from '@/api/httpClient';

export const imageApi = {
  postImage(formData) {
    return httpClient.post('/images/upload', formData);
  },
};
