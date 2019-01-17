import {
  POST_LOADING,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  GET_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    default:
      return state;
  }
}
