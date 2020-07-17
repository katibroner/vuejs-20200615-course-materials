import { imageApi } from '@/api/image-api';

export const imageService = {
  uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    return imageApi.postImage(formData);
  },

  getImageURL(id) {
    return id !== null ? `${process.env.VUE_APP_API_URL}/images/${id}` : null;
  },
};
