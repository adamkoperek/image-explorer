import {combineEpics} from 'redux-observable'
import auth from './auth.epics'
import scopes from './scopes.epics'
import directories from './directories.epics'
import images from './images.epics'

export default combineEpics(
  ...auth,
  ...scopes,
  ...directories,
  ...images
);
