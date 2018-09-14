import {combineEpics} from 'redux-observable'
import auth from './auth.epics'
import scopes from './scopes.epics'
import directories from './directories.epics'

export default combineEpics(
  ...auth,
  ...scopes,
  ...directories
);
