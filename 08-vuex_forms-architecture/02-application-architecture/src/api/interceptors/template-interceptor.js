export const interceptor = {
  request: {
    onFulfilled: (config) => {
      return config;
    },
    onRejected: (error) => {
      return error;
    },
  },

  response: {
    onFulfilled: (response) => {
      return response;
    },
    onRejected: (error) => {
      return error;
    },
  },
};
