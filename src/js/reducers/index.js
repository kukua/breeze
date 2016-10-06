import { combineReducers } from 'redux'

import error from './error'
import user from '../packages/user/reducers'

export default combineReducers({
    error,
    user,
})
