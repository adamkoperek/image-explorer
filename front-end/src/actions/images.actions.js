import {
  ADD_TAG_TO_IMAGE, ADD_TAG_TO_IMAGE_ERROR, ADD_TAG_TO_IMAGE_SUCCESS,
  GET_CURRENT_IMAGE,
  GET_CURRENT_IMAGE_ERROR,
  GET_CURRENT_IMAGE_SUCCESS,
  REMOVE_TAG_FROM_IMAGE,
  UNSET_CURRENT_IMAGE
} from "./types";

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


// hashtags

export const addTagToImage = (imageId, tag) => ({
  type: ADD_TAG_TO_IMAGE,
  payload: {image: imageId, tag: tag}
});

export const addTagToImageSuccess = ({imageId, tag}) => ({
  type: ADD_TAG_TO_IMAGE_SUCCESS,
  payload: {imageId, tag}
});

export const addTagToImageError = (error) => ({
  type: ADD_TAG_TO_IMAGE_ERROR,
  payload: error
});

export const removeTagFromImage = (imageId, tag) => ({
  type: REMOVE_TAG_FROM_IMAGE,
  payload: {image: imageId, tag: tag}
});