import {get, post} from './index'

export const getScopes = (jwt) => get(
  'ajax/scopes', jwt
);

export const createScope = (scopeName, jwt) => post(
  'ajax/scopes', JSON.stringify({scope_name: scopeName}), jwt
);

export const setCurrentScope = (scopeId, scopeName, jwt) => post(
  'ajax/scope_selections', JSON.stringify({scope_id: scopeId, scope_name: scopeName}), jwt
);
