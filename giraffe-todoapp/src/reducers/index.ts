import { combineReducers, AnyAction } from 'redux'
// import todos from './todo'
import vfilter from './visibilityFilter'
import todoReducer from 'features/todos/todoSlice'
import filterReducer from 'features/todos/todoSlice'


// export default combineReducers({
//     todos,
//     visibilityFilter
// })

// export default function todoApp (
//     state: StoreState, 
//     action : TotalAction) : StoreState {
//     return {
//         todos: todos(state.todos, action),
//         vfilter : vfilter(state.vfilter, action)
//     }
// }

// const rootReducer = combineReducers({
//     todos : todos,
//     vfilter: vfilter
// })

const addedReducers = {}

export const addReducer = (newReducers : any) => {
    Object.assign(addedReducers, newReducers);
}

// export const createRootReducer = ()=>{
//     const appReducer = 

//     return (state : any, action: AnyAction) : any =>{
//         return appReducer(state, action);
//     }
// }

export default combineReducers({
    ...todoReducer,
    ...filterReducer,
})