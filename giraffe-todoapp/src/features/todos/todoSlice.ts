import {createSlice ,PayloadAction, CaseReducer} from '@reduxjs/toolkit'
import { TodoData } from 'types';

type TodoSliceState = TodoData[]


let nextId = 0


const addTodoCase : CaseReducer<TodoSliceState, PayloadAction<string>> = (state, action) => {
    const text = action.payload
    //use Immer library to generate immutable data
    state.push({id:nextId++, text, completed:false})
}

// type prepareType = (text : string) => {payload:AddData}
// const prepareAddCase  : prepareType= (text )  =>{
//     return {payload : {text:text, id:nextId++}
// }


export const initialState : TodoData[] = new Array<TodoData>();

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers: {
        // addTodo : {
        //     reducer: addTodoCase,
        //     prepare : prepareAddCase
        // },
        addTodo : addTodoCase,
        toggleTodo : (state, action : PayloadAction<number>)=>{
            const todo = state.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})

export const {addTodo, toggleTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export default todoReducer