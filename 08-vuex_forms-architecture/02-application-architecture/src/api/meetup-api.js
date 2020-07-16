import { httpClient } from '@/api/httpClient';

export const meetupApi = {
  getMeetups() {
    return httpClient.get('/meetups');
  },

  getMeetup(id) {
    return httpClient.get(`/meetups/${id}`);
  },
};
