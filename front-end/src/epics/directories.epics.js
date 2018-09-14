import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {addDirectoryToScopeError, addDirectoryToScopeSuccess} from "../actions/directories.actions";
import {ADD_DIRECTORY_TO_SCOPE} from "../actions/types";
import {addDirectoryToScope} from "../services/directories.service";

const addDirectoryToScopeEpic = (action$, store) => action$.pipe(
  ofType(ADD_DIRECTORY_TO_SCOPE),
  mergeMap((action) => addDirectoryToScope(action.payload, store.value.auth.user.jwt).pipe(
    map(({response}) => {
      if (response.error) return addDirectoryToScopeError(response.error);
      else return addDirectoryToScopeSuccess(response);
    }),
    catchError(({response}) => of(addDirectoryToScopeError(response.error)))
  ))
);

export default [
  addDirectoryToScopeEpic
];