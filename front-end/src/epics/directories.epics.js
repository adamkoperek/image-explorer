import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

import {addDirectoryToScope, getCurrentScopeDirectories} from "../services/directories.service";
import {ADD_DIRECTORY_TO_SCOPE, GET_CURRENT_SCOPE_DIRECTORIES} from "../actions/types";
import {
  addDirectoryToScopeError,
  addDirectoryToScopeSuccess,
  getCurrentScopeDirectoriesError,
  getCurrentScopeDirectoriesSuccess
} from "../actions/directories.actions";

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

const getCurrentScopeDirectoriesEpic = (action$, store) => action$.pipe(
  ofType(GET_CURRENT_SCOPE_DIRECTORIES),
  mergeMap(() => getCurrentScopeDirectories(store.value.auth.user.jwt).pipe(
    map(({response}) => {
      if (response.error) return getCurrentScopeDirectoriesError(response.error);
      else return getCurrentScopeDirectoriesSuccess(response);
    }),
    catchError(({response}) => of(getCurrentScopeDirectoriesError(response.error)))
  ))
);

export default [
  addDirectoryToScopeEpic,
  getCurrentScopeDirectoriesEpic
];