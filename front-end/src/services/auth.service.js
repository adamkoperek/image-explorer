import {post} from './index'

export const login = (username, password) => post(
  'login',
  JSON.stringify({auth: {username, password}})
);
