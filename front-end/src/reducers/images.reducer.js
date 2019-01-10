import {
  ADD_TAG_TO_IMAGE_SUCCESS,
  GET_CURRENT_IMAGE,
  GET_CURRENT_IMAGE_ERROR,
  GET_CURRENT_IMAGE_SUCCESS, REMOVE_TAG_FROM_IMAGE_SUCCESS,
  UNSET_CURRENT_IMAGE
} from '../actions/types'

const initialState = {
  currentImage: {
    id: null,
    data: null,
    loading: false,
    error: null
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UNSET_CURRENT_IMAGE:
      return {
        ...state,
        currentImage: {
          id: null,
          data: null,
          loading: false,
          error: null
        }
      };

    case GET_CURRENT_IMAGE:
      return {
        ...state,
        currentImage: {
          id: action.payload,
          data: null,
          loading: true,
          error: null
        }
      };

    case GET_CURRENT_IMAGE_SUCCESS:
      return {
        ...state,
        currentImage: {
          ...state.currentImage,
          data: action.payload,
          loading: false,
          error: false
        }
      };

    case GET_CURRENT_IMAGE_ERROR:
      return {
        ...state,
        currentImage: {
          ...state.currentImage,
          data: null,
          loading: false,
          error: action.payload
        }
      };

    case ADD_TAG_TO_IMAGE_SUCCESS:
      return {
        ...state,
        currentImage: {
          ...state.currentImage,
          data: {
            ...state.currentImage.data,
            tags: action.payload.tags
          }
        }
      };

    case REMOVE_TAG_FROM_IMAGE_SUCCESS:
      return {
        ...state,
        currentImage: {
          ...state.currentImage,
          data: {
            ...state.currentImage.data,
            tags: action.payload.tags
          }
        }
      };

    default:
      return state;
  }
}