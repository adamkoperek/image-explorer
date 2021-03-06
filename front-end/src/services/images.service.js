import {get, post} from "./index";

export const getCurrentImage = (imageId, jwt) => get(
  'ajax/images/' + imageId, jwt
);

export const addTagToImage = ({imageId, tag}, jwt) => post(
  'ajax/images_tags', JSON.stringify({imageId, tag}), jwt
);

export const removeTagFromImage = ({imageId, tag}, jwt) => post(
  'ajax/images_tags/delete', JSON.stringify({imageId, tag}), jwt
);