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

      console.log('find ', action.payload, ' in ', state.directories);

      let {directories} = state;

      openContainingDirectories(directories, action.payload);

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
    default:
      return state;
  }
}



const openContainingDirectories = (directories, dirId) => {

  // if directories array doesn't exist or it is empty it won't contain searched directory so return false
  if (!directories || directories.length === 0) {
    return false;
  }

  for (const directory of directories) {

    // check if it is searched directory
    if (directory.id === dirId) {
      // open and return true
      directory.open = true;
      return true;
    }

    // check if it contains searched directory
    if (openContainingDirectories(directory.subDirs, dirId)) {
      // open and return true
      directory.open = true;
      return true;
    }

    // check if directory has any sub dirs
    if (!directory.subDirs || directory.subDirs.length === 0) {
      // if it doesn't, close it
      directory.open = false;
    }

  }

  return false;
};