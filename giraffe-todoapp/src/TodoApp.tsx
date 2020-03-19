import React from 'react'
import AddTodo from 'container/AddTodo'
import TodoList from 'components/todoList'
import { VisibilityFilters } from 'types'

const TodoApp = ()=> (
    <div>
        <AddTodo></AddTodo>
         {/* <TodoList></TodoList>  */}
    </div>
)

export default TodoApp