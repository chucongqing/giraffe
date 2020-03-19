import React from 'react'
import AddTodo from 'container/AddTodo'
import TodoList from 'components/todoList'

const TodoApp = ()=> (
    <div>
        <AddTodo></AddTodo>

        <TodoList></TodoList>
    </div>
)

export default TodoApp