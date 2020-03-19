import React from 'react'
import { connect, useDispatch, ConnectedProps } from 'react-redux'
import { addTodo } from 'actions'
import { TodoActionTypes } from 'types';
import { RootState } from 'store/store';



const mapState = (state : RootState) => ({})
const mapDispatch = {
    dispatch : addTodo
}

const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux 

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
                    props.dispatch(input.value)
                }}

            >
                <input ref={node=> (input = node)}></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}


export default connector(AddTodo)