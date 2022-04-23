import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  users: userReducer,
  posts: postsReducer,
});
