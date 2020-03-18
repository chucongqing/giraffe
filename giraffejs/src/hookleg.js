import React, {useState, useEffect} from 'react';

function HookLeg1() {
    const [count, setCount] = useState(0);
    // const [age, setAge] = useState(33);

    useEffect(()=>{
        document.title = `you clicked ${count} times`

        // clean up function
        return ()=>{
            console.log("this is a clean up function")
        }
    })
    return (
        <div>
            <p> You clicked {count} times </p>
            <button onClick = { ()=> setCount(count + 1)} />
        </div>
    )
}

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(stateu) {
        setIsOnline(status.isOnline);
    }

    useEffect(()=>{
        console.log("subscribe function")

        return ()=>{
            console.log('unsubscribe function');
        }
    })

    return isOnline
}

export function HookTotal(){
    return (
        <div>
            <HookLeg1></HookLeg1>
        </div>
        
    )
}