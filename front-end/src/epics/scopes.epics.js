import {ofType} from "redux-observable";
import {CREATE_SCOPE, GET_SCOPES, SET_CURRENT_SCOPE} from "../actions/types";
import {of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {getScopes, createScope, setCurrentScope} from '../services/scopes.service'
import {getScopesSuccess, createScopeSuccess, setCurrentScopeSuccess, setCurrentScopeError} from "../actions/scopes.actions";

const getScopesEpic = (action$, store) => action$.pipe(
  ofType(GET_SCOPES),
  mergeMap(() => getScopes(store.value.auth.user.jwt).pipe(
    map(({response}) => getScopesSuccess(response)),
    catchError(({response}) => of(getScopesSuccess(response.error)))
  ))
);

const createScopeEpic = (action$, store) => action$.pipe(
  ofType(CREATE_SCOPE),
  mergeMap((action) => createScope(action.payload, store.value.auth.user.jwt).pipe(
    map(({response}) => {
      console.log(response);
      return createScopeSuccess();
    }),
    catchError(({response}) => of(getScopesSuccess(response.error)))
  ))
);

const selectScopeEpic = (action$, store) => action$.pipe(
  ofType(SET_CURRENT_SCOPE),
  mergeMap((action) => setCurrentScope(action.payload.id, action.payload.name, store.value.auth.user.jwt).pipe(
    map(() => setCurrentScopeSuccess(action.payload)),
    catchError(() => of(setCurrentScopeError()))
  ))
);

export default [
  getScopesEpic,
  createScopeEpic,
  selectScopeEpic
];
