import {ofType} from "redux-observable";
import {GET_CURRENT_IMAGE} from "../actions/types";
import {catchError, map, mergeMap} from "rxjs/operators";
import {getCurrentImage} from "../services/images.service";
import {of} from "rxjs";
import {getCurrentImageError, getCurrentImageSuccess} from "../actions/images.actions";

const getCurrentImageEpic = (action$, store) => action$.pipe(
  ofType(GET_CURRENT_IMAGE),
  mergeMap((action) => getCurrentImage(action.payload, store.value.auth.user.jwt).pipe(
    map(({response}) => {
      if (response.error) return getCurrentImageError(response.error);
      else return getCurrentImageSuccess(response);
    }),
    catchError(({response}) => of(getCurrentImageError(response.error)))
  ))
);

export default [
  getCurrentImageEpic
]