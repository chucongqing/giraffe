
export interface TodoData {
    text : string;
    completed : boolean;
    id : number;
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export interface AddTodoAction {
    type : typeof ADD_TODO
    id : number;
    text : string;
}

export interface ToggleTodoAction {
    type : typeof TOGGLE_TODO;
    id : number
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
export type TotalAction = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction
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

export interface StoreState {
    todos : TodoData[];
    vfilter : string;
}