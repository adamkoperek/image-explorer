import {get, post} from './index'

export const getScopes = (jwt) => get(
  'ajax/scopes', jwt
);

export const createScope = (scopeName, jwt) => post(
  'ajax/scopes', JSON.stringify({scope_name: scopeName}), jwt
);
