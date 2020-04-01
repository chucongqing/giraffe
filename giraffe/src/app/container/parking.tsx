import React from 'react'


function Parking() {


    let mlist = ()=> {
        const a = [1,2,3,5,6]
        const listItems = a.map((n)=>(
            <li key={n.toString()}>
                {n}
            </li>
        ))
        return (
        <ul>{listItems}</ul>
        )

    }

    

    return (
        <div>
            {mlist}
        </div>
    )
}

export default Parking;