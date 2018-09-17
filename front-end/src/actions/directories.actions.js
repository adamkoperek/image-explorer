import {
  ADD_DIRECTORY_TO_SCOPE,
  ADD_DIRECTORY_TO_SCOPE_SUCCESS,
  ADD_DIRECTORY_TO_SCOPE_ERROR,
  GET_CURRENT_SCOPE_DIRECTORIES,
  GET_CURRENT_SCOPE_DIRECTORIES_SUCCESS,
  GET_CURRENT_SCOPE_DIRECTORIES_ERROR,
  SET_CURRENT_DIRECTORY,
  GET_CURRENT_DIRECTORY_CONTENT,
  GET_CURRENT_DIRECTORY_CONTENT_SUCCESS,
  GET_CURRENT_DIRECTORY_CONTENT_ERROR
} from "./types";

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


export const getCurrentScopeDirectories = () => ({
  type: GET_CURRENT_SCOPE_DIRECTORIES
});
export const getCurrentScopeDirectoriesSuccess = (directories) => ({
  type: GET_CURRENT_SCOPE_DIRECTORIES_SUCCESS,
  payload: directories
});
export const getCurrentScopeDirectoriesError = (error) => ({
  type: GET_CURRENT_SCOPE_DIRECTORIES_ERROR,
  payload: error
});

export const setCurrentDirectory = (directory) => ({
  type: SET_CURRENT_DIRECTORY,
  payload: directory.id
});

export const getCurrentDirectoryContent = () => ({
  type: GET_CURRENT_DIRECTORY_CONTENT
});
export const getCurrentDirectoryContentSuccess = (content) => ({
  type: GET_CURRENT_DIRECTORY_CONTENT_SUCCESS,
  payload: content
});
export const getCurrentDirectoryContentError = (error) => ({
  type: GET_CURRENT_DIRECTORY_CONTENT_ERROR,
  payload: error
});