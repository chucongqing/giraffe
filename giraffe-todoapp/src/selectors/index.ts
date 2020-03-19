import { TodoData } from 'types'

interface RootState {
    todos: TodoData[];
    vfilter : string;
}

const selectTodoDatas = (state : RootState) => state.todos;

const selectFilter = (state : RootState) => state.vfilter;

