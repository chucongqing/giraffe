import { createStore } from 'redux';
import  rootReducer  from 'reducers';
import {configureStore} from '@reduxjs/toolkit'

export type RootState = ReturnType<typeof rootReducer>


// export const store = createStore(rootReducer)

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch

