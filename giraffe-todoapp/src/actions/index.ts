import {SetVisibilityFilterAction, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO,TodoActionTypes} from 'types'
let nextTodoId = 0


export function addTodo(text : string) : TodoActionTypes {
    return {
        type : ADD_TODO,
        text : text,
        id : nextTodoId++
    }
}

export function toggleTodo(id : number) : TodoActionTypes {
    return {
        type : TOGGLE_TODO,
        id : id
    }
}

export function setVisibilityFilter( filter : string) : SetVisibilityFilterAction {
    return {
        type : SET_VISIBILITY_FILTER,
        filter: filter
    }
}