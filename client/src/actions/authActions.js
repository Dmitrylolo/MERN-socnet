import { REGISTER_USER } from './types';

export const registerUser = userData => ({
  type: REGISTER_USER,
  payload: userData
});
