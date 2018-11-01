import { combineReducers } from 'redux'
import auth from './auth.reducer'
import scopes from './scopes.reducer'
import directories from './directories.reducer'
import images from './images.reducer'

export default combineReducers({
  auth,
  scopes,
  directories,
  images
})
