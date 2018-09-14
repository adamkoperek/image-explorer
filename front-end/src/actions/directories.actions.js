import {ADD_DIRECTORY_TO_SCOPE, ADD_DIRECTORY_TO_SCOPE_SUCCESS, ADD_DIRECTORY_TO_SCOPE_ERROR} from "./types";

export const addDirectoryToScope = (directory) => ({
  type: ADD_DIRECTORY_TO_SCOPE,
  payload: directory
});

export const addDirectoryToScopeSuccess = () => ({
  type: ADD_DIRECTORY_TO_SCOPE_SUCCESS
});

export const addDirectoryToScopeError = (error) => ({
  type: ADD_DIRECTORY_TO_SCOPE_ERROR,
  payload: error
});