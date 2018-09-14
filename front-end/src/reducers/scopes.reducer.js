import {GET_SCOPES_SUCCESS, SET_CURRENT_SCOPE_SUCCESS, SET_CURRENT_SCOPE_ERROR} from "../actions/types";

const initialState = {
  scopes: [],
  currentScope: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_SCOPES_SUCCESS:
      return {
        ...state,
        scopes: action.payload
      };

    case SET_CURRENT_SCOPE_SUCCESS:
      return {
        ...state,
        currentScope: action.payload
      };

    case SET_CURRENT_SCOPE_ERROR:
      return {
        ...state,
        currentScope: null
      };

    default:
      return state;
  }
}
