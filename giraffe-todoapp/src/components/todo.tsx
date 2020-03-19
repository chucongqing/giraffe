import React from 'react'

type MyProp = {
    id : number;
    completed : boolean;
    text : string;
    onClick : (id:number)=> void
}
 const Todo : React.FC<MyProp> = (props) =>{

    return (
        
        <li
        
        >
                {props.text}
        </li>
        
    )
}

export default Todo;