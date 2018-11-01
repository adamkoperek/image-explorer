import {GET_CURRENT_IMAGE, GET_CURRENT_IMAGE_ERROR, GET_CURRENT_IMAGE_SUCCESS, UNSET_CURRENT_IMAGE} from "./types";

export const getCurrentImage = (imageId) => ({
  type: GET_CURRENT_IMAGE,
  payload: imageId
});

export const getCurrentImageSuccess = (image) => ({
  type: GET_CURRENT_IMAGE_SUCCESS,
  payload: image
});

export const getCurrentImageError = (error) => ({
  type: GET_CURRENT_IMAGE_ERROR,
  payload: error
});

export const unsetCurrentImage = () => ({
  type: UNSET_CURRENT_IMAGE,
  payload: null
});