import {createSlice ,PayloadAction, CaseReducer} from '@reduxjs/toolkit'
import { TodoData } from 'types';
import {VisibilityFilters} from "types"

const vSlice = createSlice({
    name:"vFilter",
    initialState : VisibilityFilters.SHOW_ALL,
    reducers:{
        setVisibilityFilter: (state, action :PayloadAction<string>)=>{
            return action.payload
        }
    }
})

export const { setVisibilityFilter } = vSlice.actions;
const filterReducer = vSlice.reducer;

export default filterReducer