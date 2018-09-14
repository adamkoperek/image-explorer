import {ofType} from "redux-observable";
import {LOGIN} from "../actions/types";
import {catchError, map, mergeMap} from "rxjs/operators";
import {login} from "../services/auth.service";
import {loginError, loginSuccess} from "../actions/auth.actions";
import {of} from "rxjs";

const loginEpic = action$ => action$.pipe(
  ofType(LOGIN),
  mergeMap(action =>
    login(action.payload.username, action.payload.password).pipe(
      map(
        ({response}) => {
          if (response.error) { return loginError(response.error); }
          return loginSuccess(action.payload.username, response.jwt);
        }
      ),
      catchError(({response}) => of(loginError(response.error)))
    )
  )
);


export default [
  loginEpic
];
