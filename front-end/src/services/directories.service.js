import {post, get} from "./index";

export const addDirectoryToScope = (directory, jwt) => post(
  'ajax/directories', JSON.stringify({directory: directory}), jwt
);

export const getCurrentScopeDirectoriesService = (jwt) => get(
  'ajax/directories', jwt
);

export const getCurrentDirectoryContent = (directoryId, jwt) => get(
  'ajax/directories/' + directoryId, jwt
);