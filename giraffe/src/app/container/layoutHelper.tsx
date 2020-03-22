import React from 'react'
import RGL, { Layout } from 'react-grid-layout'
import _ from  'lodash'
export  function generateRandomLayout(times: number) : Layout[] {
    const arr: Layout[] = new Array<Layout>(times)

    const arr1 : string[] = new Array<string>(times)

    _.map(arr1, (item:string, index:number)=>{
        return item + index.toString();
    })

    return _.map(arr, (item:Layout, index: number)=>{
        const i = index;
        const y = Math.ceil(Math.random() * 4) + 1
        return {
                      x:(i*2)%12,
            y:Math.floor(1/6)*y,
            w:2,
            h:y,
            i:i.toString()
        }
    })

   
    // return _.map( arr ,(item:Layout,i : number) : Layout=>{
    //     const y = Math.cell(Math.random() * 4) + 1
    //     return {
    //         x:(i*2)%12,
    //         y:Math.floor(1/6)*y,
    //         w:2,
    //         h:y,
    //         i:i.toString()
    //     }

        
    // })
}

export function generateDOM(times:number) {
    let ret = new Array<JSX.Element>(times)

    return _.map(ret , (v:JSX.Element,i:number)=>{
        return (
            <div key={i} >
                <span className='text' >{i}</span>
            </div>
        )
    })
}