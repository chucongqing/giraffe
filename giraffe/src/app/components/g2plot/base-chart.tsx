import React, {useRef,RefObject, useEffect} from 'react'

import {Bar} from '@antv/g2plot'
const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

function  G2PlotBaseChart () {


const htmlEle = useRef<HTMLDivElement>(null)



useEffect(()=>{
    const barPlot = new Bar(htmlEle.current as HTMLDivElement,{
        data,
        xField:'sales',
        yField:'year',
        colorField:'year',
        forceFit:true,
    })

    barPlot.render();
}, [])
    return (
        <div ref={htmlEle}>
            
        </div>
    )
}

export default G2PlotBaseChart