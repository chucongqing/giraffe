import React from 'react'
import {Provider} from 'react-redux'

import { store } from 'app/store'


import UserInfoComp from 'app/components/userInfo/userInfo'
import ZChart from './components/charts/zchart'
import MyGrid from './container/layout'

const GiraffeApp = ()=>{
 
    return (
        <Provider store={store}>
            <UserInfoComp></UserInfoComp>
            <MyGrid></MyGrid>
        </Provider>
        
    )
}

export default GiraffeApp