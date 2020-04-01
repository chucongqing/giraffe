import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { UsersState } from 'app/types';

export const initialState : UsersState =  {
    name:"user",
    uid:"0", 
    license:"",
    usingPark:false,
    money:0
}

/*
   RTK(redux-toolkit) use Immer library to generate immutable data
*/
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
         addMoney: (state, action: PayloadAction<number>) =>{
             if(state.money !== undefined){
                (state.money as number) += action.payload;
             }
             return state
         },
        usePark : (state, action: PayloadAction<boolean>) =>{
            state.usingPark = action.payload;
            return state;
        }
    }
})

export const {usePark}  = userSlice.actions;

const userReducer = userSlice.reducer

export default userReducer