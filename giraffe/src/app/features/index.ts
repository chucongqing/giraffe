import  userReducer  from 'app/features/user/userSlice'

import {combineReducers} from 'redux'


export const rootReducer = combineReducers({
    users : userReducer
})