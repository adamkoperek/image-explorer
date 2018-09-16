import {} from "../actions/types";
import {GET_CURRENT_SCOPE_DIRECTORIES_SUCCESS} from "../actions/types";
import {SET_CURRENT_DIRECTORY} from "../actions/types";

const initialState = {
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
        currentDirectory: action.payload
      };
    default: return state;
  }
}