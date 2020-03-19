import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'actions'
import { TodoActionTypes } from 'types';

type Props = {
    dispatch :  (x:TodoActionTypes)=>void
}


let AddTodo : React.FC<Props> = (props) =>{
    let input : HTMLInputElement | null = null;

    return (
        <div>
            <form
                onSubmit={ e=>{
                    e.preventDefault();
                    if( !input?.value.trim()){
                        return;
                    }
                    props.dispatch(addTodo(input.value))
                }}

            >
                <input ref={node=> (input = node)}></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)