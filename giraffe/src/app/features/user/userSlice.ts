import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { UsersState } from 'app/types';

export const initialState : UsersState =  {name:"admin",sex:"",uid:"0", money:0}

/*
   RTK(redux-toolkit) use Immer library to generate immutable data
*/
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        addMoney: (state, action: PayloadAction<number>) =>{
            state.money += action.payload;
            return state
        }
    }
})

export const {addMoney}  = userSlice.actions;

const userReducer = userSlice.reducer

export default userReducer