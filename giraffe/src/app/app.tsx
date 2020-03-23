import React from 'react'
import {Provider} from 'react-redux'

import { store } from 'app/store'


import UserInfoComp from 'app/components/userInfo/userInfo'
import ZChart from './components/charts/zchart'
import MyGrid from './container/layout'
import Layout3 from 'app/container/layout3'
import G2PlotBaseChart from './components/g2plot/base-chart'

const GiraffeApp = ()=>{
 
    return (
        <Provider store={store}>
            {/* <UserInfoComp></UserInfoComp> */}
            {/* { <MyGrid></MyGrid> } */}
            <Layout3></Layout3>
            {/* <G2PlotBaseChart></G2PlotBaseChart> */}
        </Provider>
        
    )
}

export default GiraffeApp