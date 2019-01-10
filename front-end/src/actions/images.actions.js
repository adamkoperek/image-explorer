import {
  GET_CURRENT_IMAGE, GET_CURRENT_IMAGE_ERROR, GET_CURRENT_IMAGE_SUCCESS,
  UNSET_CURRENT_IMAGE,
  ADD_TAG_TO_IMAGE, ADD_TAG_TO_IMAGE_ERROR, ADD_TAG_TO_IMAGE_SUCCESS,
  REMOVE_TAG_FROM_IMAGE, REMOVE_TAG_FROM_IMAGE_ERROR, REMOVE_TAG_FROM_IMAGE_SUCCESS
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
  payload: {imageId, tag}
});

export const addTagToImageSuccess = (tags) => ({
  type: ADD_TAG_TO_IMAGE_SUCCESS,
  payload: {tags}
});

export const addTagToImageError = (error) => ({
  type: ADD_TAG_TO_IMAGE_ERROR,
  payload: error
});


export const removeTagFromImage = (imageId, tag) => ({
  type: REMOVE_TAG_FROM_IMAGE,
  payload: {imageId, tag}
});

export const removeTagFromImageSuccess = (tags) => ({
  type: REMOVE_TAG_FROM_IMAGE_SUCCESS,
  payload: {tags}
});

export const removeTagFromImageError = (error) => ({
  type: REMOVE_TAG_FROM_IMAGE_ERROR,
  payload: error
});