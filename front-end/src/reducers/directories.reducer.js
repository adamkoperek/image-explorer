import {
  SET_CURRENT_DIRECTORY,
  GET_CURRENT_SCOPE_DIRECTORIES_SUCCESS,
  GET_CURRENT_DIRECTORY_CONTENT_SUCCESS
} from "../actions/types";

const initialState = {
  currentDirectoryId: null,
  currentDirectory: null,
  directories: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_SCOPE_DIRECTORIES_SUCCESS:
      return {
        ...state,
        directories: action.payload
      };
    case SET_CURRENT_DIRECTORY:
      return {
        ...state,
        currentDirectoryId: action.payload,
        currentDirectory: null
      };
    case GET_CURRENT_DIRECTORY_CONTENT_SUCCESS:
      return {
        ...state,
        currentDirectory: action.payload
      };
    default: return state;
  }
}