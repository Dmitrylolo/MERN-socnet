import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  NO_ERRORS,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRRENT_USER
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

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add experience

export const addExperience = (experience, history) => dispatch => {
  axios
    .post('api/profile/experience', experience)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add education

export const addEducation = (education, history) => dispatch => {
  axios
    .post('api/profile/education', education)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can Not be undone!')) {
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Delete experience
export const deleteExperience = id => dispatch => {
  if (window.confirm('Are you sure? This can Not be undone!')) {
    axios
      .delete(`/api/profile/experience/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Delete experience
export const deleteEducation = id => dispatch => {
  if (window.confirm('Are you sure? This can Not be undone!')) {
    axios
      .delete(`/api/profile/education/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

// Clear loading
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
