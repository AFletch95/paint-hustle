import axios from 'axios';

export default {
  account: {
    // create user account
    authenticate({ provider, accessToken }) {
      switch (provider) {
        case 'google':
          return axios.post('/api/v1/auth/google', {
            access_token: accessToken,
          });
        default:
          throw Error(`${provider} is not a supported auth provider`);
      }
    },
    logOut() {
      return axios.post('api/v1/account/logout');
    },
    getInfo() {
      return axios.get('/api/v1/account');
    },
    updateInfo({ username, portrait }) {
      return axios.put('/api/v1/account', { username, portrait });
    },
    getCanvases({ page, count }) {
      return axios.get('/api/v1/account/canvases', { page, count });
    },
    getAuctions({ page, count }) {
      return axios.get('/api/v1/account/auctions', { page, count });
    },
  },

  getAuctions(options) {
    return axios.get('/api/v1/auctions', options);
  },

  createCanvas(canvas) {
    return axios.post('/api/v1/canvases', canvas);
  },
};
