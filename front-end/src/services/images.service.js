import {get} from "./index";

export const getCurrentImage = (imageId, jwt) => get(
  'ajax/images/' + imageId, jwt
);