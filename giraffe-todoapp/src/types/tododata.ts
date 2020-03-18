export interface TodoData {
    text : string;
    completed : boolean;
    id : number;
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

interface AddTodoAction {
    type : typeof ADD_TODO
    id : number;
    text : string;
}

interface ToggleTodoAction {
    type : typeof TOGGLE_TODO;
    id : number
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE:"SHOW_ACTIVE"
}

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
export interface SetVisibilityFilterAction {
    type : typeof SET_VISIBILITY_FILTER,
    filter : string
}