import axios from 'axios';

export const apiInstance = axios.create({
  timeout: 15000,
  responseType: 'json',
  baseURL: 'https://boilerplate-api.bptech.dev',
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
