import { combineReducers } from 'redux';

import authReducer from './authReducer';
// import profileReducer from './profileReducer';
// import errorReducer from './errorReducer';
// import postsReducer from './postsReducer';

export default combineReducers({
  auth: authReducer
  //   profile: profileReducer,
  //   error: errorReducer,
  //   posts: postsReducer
});
