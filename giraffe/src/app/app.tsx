import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import { store } from 'app/store'
import UserInfoComp from 'app/components/userInfo/userInfo'
import ZChart from './components/charts/zchart'
import MyGrid from './container/layout'
import Layout3 from 'app/container/layout3'
import G2PlotBaseChart from './components/g2plot/base-chart'
import axios from 'axios'

import {Router, Link, RouteComponentProps} from "@reach/router"
import Parking from './container/parking';

interface InvoiceProps extends RouteComponentProps {
    invoiceId? : string;
}

let Home = (props : RouteComponentProps)=> <UserInfoComp />
let Layout = (props : RouteComponentProps)=> <Layout3 />

let Park = (props:RouteComponentProps) => <Parking></Parking>
// at url "/invoice/23"
let Invoice = (props: InvoiceProps)=> (
    <div>
        <h1>Invoice {props.invoiceId} </h1>
    </div>
)


const GiraffeApp = ()=>{

    async function getUser() {
        const response = await axios.get('api/getuser')
        console.log(response);
    }

    useEffect(()=>{
        console.log("App Init!")

    
        getUser()
        

    },[])
    
   
    return (
        <Provider store={store}>
            
            <h1>Tutorial!</h1>

            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="layout">Layout</Link>
                    </li>
                    <li>
                    <Link to="invoice">invoice</Link>
                    
                    </li>
                    <li>
                        <Link to="park">停车</Link>
                    </li>
                </ul>
               
            
                
            </nav>

            <Router>
            <Home path="/" />
            <Layout path="layout" />
            
            <Invoice path="invoice/:invoiceId" />
            <Park path="park"></Park>
            </Router>
           
            {/* <UserInfoComp></UserInfoComp> */}
            {/* { <MyGrid></MyGrid> } */}
            {/* <Layout3></Layout3> */}
            {/* <G2PlotBaseChart></G2PlotBaseChart> */}
        </Provider>
        
    )
}

export default GiraffeApp