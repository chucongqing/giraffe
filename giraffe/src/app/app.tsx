import React from 'react'
import {Provider} from 'react-redux'

import { store } from 'app/store'

import UserInfoComp from 'app/components/userInfo/userInfo'

const GiraffeApp = ()=>{
 
    return (
        <Provider store={store}>
            <UserInfoComp></UserInfoComp>
        </Provider>
        
    )
}

export default GiraffeApp