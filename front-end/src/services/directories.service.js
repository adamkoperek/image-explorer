import {post} from "./index";

export const addDirectoryToScope = (directory, jwt) => post(
  'ajax/directories', JSON.stringify({directory: directory}), jwt
);