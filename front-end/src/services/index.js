import {ajaxPost, ajaxGet} from "rxjs/internal/observable/dom/AjaxObservable";

export const api = 'http://localhost:3000/';
export const jsonHeaders = {'Content-type': 'application/json'};

export const post = (action, body, jwt = null, headers = jsonHeaders) => {
  headers = applyJwt(headers, jwt);
  // console.log(api + action, body, headers, jwt);
  return ajaxPost(
    api + action, body, headers
  );
};


export const get = (action, jwt = null, headers = jsonHeaders) => {
  headers = applyJwt(headers, jwt);
  // console.log(api + action, headers, jwt);
  return ajaxGet(
    api + action, headers
  );
};


function applyJwt(headers, jwt) {
  if (headers && jwt) {
    return {
      ...headers,
      Authorization: 'Bearer ' + jwt
    }
  }
  return headers;
}
