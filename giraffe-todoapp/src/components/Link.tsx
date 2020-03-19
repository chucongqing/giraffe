import React from 'react'

type Props = {
    active : boolean;
    onClick : ()=> void
}
const Link : React.FC<Props> = (props) =>{
    return (
        <button
            onClick={props.onClick}
            disabled={props.active}
            style = {{
                marginLeft: '4px'
            }}
        >
            {props.children}
        </button>
    )
}

export default Link;