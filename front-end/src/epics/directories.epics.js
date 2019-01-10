import {ofType} from "redux-observable";
import {catchError, flatMap, map, mergeMap} from "rxjs/operators";
import {concat, of} from "rxjs";

import {
  addDirectoryToScope,
  getCurrentDirectoryContent,
  getCurrentScopeDirectoriesService,
} from "../services/directories.service";
import {ADD_DIRECTORY_TO_SCOPE, GET_CURRENT_DIRECTORY_CONTENT, GET_CURRENT_SCOPE_DIRECTORIES} from "../actions/types";
import {
  addDirectoryToScopeError,
  addDirectoryToScopeSuccess,
  getCurrentDirectoryContentError,
  getCurrentDirectoryContentSuccess,
  getCurrentScopeDirectories,
  getCurrentScopeDirectoriesError,
  getCurrentScopeDirectoriesSuccess,
  setCurrentDirectory
} from "../actions/directories.actions";

const addDirectoryToScopeEpic = (action$, store) => action$.pipe(
  ofType(ADD_DIRECTORY_TO_SCOPE),
  mergeMap((action) => addDirectoryToScope(action.payload, store.value.auth.user.jwt).pipe(
    flatMap(({response}) => {
      if (response.error) return addDirectoryToScopeError(response.error);
      return concat(
        of(addDirectoryToScopeSuccess(response)),
        of(getCurrentScopeDirectories(response.id)) // id of created directory
      );
    }),
    catchError(({response}) => of(addDirectoryToScopeError(response.error)))
  ))
);

const getCurrentScopeDirectoriesEpic = (action$, store) => action$.pipe(
  ofType(GET_CURRENT_SCOPE_DIRECTORIES),
  mergeMap((action) => getCurrentScopeDirectoriesService(store.value.auth.user.jwt).pipe(
    flatMap(({response}) => {
      if (response.error) return getCurrentScopeDirectoriesError(response.error);
      return concat(
        of(getCurrentScopeDirectoriesSuccess(response)),
        of(setCurrentDirectory(action.payload.directoryToSelect)) // id of created directory
      );
    }),
    catchError(({response}) => of(getCurrentScopeDirectoriesError(response.error)))
  ))
);

const getCurrentDirectoryContentEpic = (action$, store) => action$.pipe(
  ofType(GET_CURRENT_DIRECTORY_CONTENT),
  mergeMap(() => getCurrentDirectoryContent(store.value.directories.currentDirectoryId, store.value.auth.user.jwt).pipe(
    map(({response}) => {
      if (response.error) return getCurrentDirectoryContentError(response.error);
      else return getCurrentDirectoryContentSuccess(response);
    }),
    catchError(({response}) => of(getCurrentDirectoryContentError(response.error)))
  ))
);

export default [
  addDirectoryToScopeEpic,
  getCurrentScopeDirectoriesEpic,
  getCurrentDirectoryContentEpic
];