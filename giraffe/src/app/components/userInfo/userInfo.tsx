import React, { FC } from 'react'
// import { UsersState } from 'types';
import {connect ,ConnectedProps} from 'react-redux'
import { RootState } from 'app/types';
import { addMoney } from 'app/features/user/userSlice';


// addMoney
const mapState = (state : RootState) =>{

    return {
        name: state.users.name,
        money:state.users.money
    }
}

const mapDispatch = {
    addMoney : addMoney
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>


const UserInfo : FC<PropsFromRedux> = (props)=>{
    return (
        <div>
            <p>user:{props.name}</p>
          
            <p>money:{props.money}</p>

            <button onClick={()=>{props.addMoney(1)}}></button>
        </div>
        
    )
} 

export default connector(UserInfo);