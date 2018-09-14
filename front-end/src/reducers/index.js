import { combineReducers } from 'redux'
import auth from './auth.reducer'
import scopes from './scopes.reducer'

export default combineReducers({
  auth,
  scopes,
})
