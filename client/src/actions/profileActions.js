import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  NO_ERRORS,
  CLEAR_CURRENT_PROFILE
} from './types';

// Get profile

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res => {
      dispatch({
        type: NO_ERRORS
      });
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

// Clear loading
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
