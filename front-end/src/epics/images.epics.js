import {ofType} from "redux-observable";
import {ADD_TAG_TO_IMAGE, GET_CURRENT_IMAGE} from "../actions/types";
import {catchError, map, mergeMap} from "rxjs/operators";
import {addTagToImage, getCurrentImage} from "../services/images.service";
import {of} from "rxjs";
import {addTagToImageError, addTagToImageSuccess, getCurrentImageError, getCurrentImageSuccess} from "../actions/images.actions";

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

const addTagToImageEpic = (action$, store) => action$.pipe(
  ofType(ADD_TAG_TO_IMAGE),
  mergeMap((action) => addTagToImage(action.payload, store.value.auth.user.jwt).pipe(
    map(({response}) => {
      if (response.error) return addTagToImageError(response.error);
      else return addTagToImageSuccess(action.payload);
    }),
    catchError(({response}) => of(getCurrentImageError(response.error)))
  ))
);

export default [
  getCurrentImageEpic,
  addTagToImageEpic
]