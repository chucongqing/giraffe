import React from 'react'
import Todo from './todo'
import { TodoData, TodoActionTypes } from 'types'
import {RootState} from 'store/store'
import { connect ,ConnectedProps } from 'react-redux';
import { toggleTodo} from 'actions'


const mapStateToProps   = (state : RootState) => {
    const {todos} = state;
    return { todos : todos}
}

const mapDispatch = {
    toggleTodo : toggleTodo
}

const connector = connect(mapStateToProps, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux 

const TodoList  = (props : PropsFromRedux) =>{

    return (
        <ul>
        {props.todos.map(todo    => (
            <Todo key={todo.id} {...todo}
                onClick={()=> props.toggleTodo(todo.id)}
            ></Todo>    
        ))}
        </ul>
    )
}



export default connector(TodoList);