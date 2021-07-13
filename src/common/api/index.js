import axios from 'axios';

export const apiInstance = axios.create({
  timeout: 15000,
  responseType: 'json',
  baseURL: 'https://boilerplate-api.bptech.dev',
  //baseURL: 'http://192.168.236.34:8081',
  validateStatus: status => status >= 200 && status <= 302,
});

export const signInApi = async (email, password) => {
  try {
    return await apiInstance
      .post('/api/auth/sign-in', {
        email: email,
        password: password,
      })
      .then(response => {
        return response.data.accessToken;
      });
  } catch (error) {
    return console.error(error);
  }
};

export const continueWithFacebookApi = async (user, token) => {
  try {
    return await apiInstance
      .post('/api/auth/continueWithFacebook', {
        firstName: user.first_name,
        lastName: user.last_name,
        accessToken: token,
        email: user.email,
        id: user.id,
      })
      .then(response => {
        return response.data.accessToken;
      });
  } catch (error) {
    return console.error(error);
  }
};
