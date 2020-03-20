import React from 'react'
import {Provider} from 'react-redux'

import { store } from 'app/store'

import UserInfoComp from 'app/components/userInfo/userInfo'
import ZChart from './components/charts/zchart'

const GiraffeApp = ()=>{
 
    return (
        <Provider store={store}>
            <UserInfoComp></UserInfoComp>
            <ZChart></ZChart>
        </Provider>
        
    )
}

export default GiraffeApp