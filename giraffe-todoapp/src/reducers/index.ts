import { combineReducers } from 'redux'
import todos from './todo'
import vfilter from './visibilityFilter'

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

const rootReducer = combineReducers({
    todos : todos,
    vfilter: vfilter
})

export default rootReducer