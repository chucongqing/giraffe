import React from 'react'
import Todo from './todo'
import { TodoData } from 'types'

type TodoListProps = {
    todos : TodoData[],
    toogleTodo : (id : number) => void
}
const TodoList  = (props : TodoListProps) =>{

    return (
        <ul>
        {props.todos.map(todo    => (
            <Todo key={todo.id} {...todo}
                onClick={()=> props.toogleTodo(todo.id)}
            ></Todo>    
        ))}
        </ul>
    )
}