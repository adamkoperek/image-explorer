import {post, get} from "./index";

export const addDirectoryToScope = (directory, jwt) => post(
  'ajax/directories', JSON.stringify({directory: directory}), jwt
);

export const getCurrentScopeDirectories = (jwt) => get(
  'ajax/directories', jwt
);