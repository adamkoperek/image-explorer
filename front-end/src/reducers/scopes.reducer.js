import {GET_SCOPES_SUCCESS, SET_CURRENT_SCOPE} from "../actions/types";

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

    case SET_CURRENT_SCOPE:
      return {
        ...state,
        currentScope: action.payload
      }

    default:
      return state;
  }
}
