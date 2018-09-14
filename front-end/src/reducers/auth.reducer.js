import {LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CANCEL, LOGOUT} from "../actions/types";

const initialState = {
  user: null,
  loginError: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginError: null
      };

    case LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loginError: action.payload
      };

    case LOGIN_CANCEL:
      return {
        ...state,
        loginError: null
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        loginError: null
      };

    default:
      return state;
  }
}
