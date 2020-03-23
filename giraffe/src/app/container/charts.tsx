import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

export enum ChartType {
    Bar = 'Bar',
    Line = 'Line',
    Pie = 'Pie'
}


export function getBarChart()  {
    const data = [
        { genre: 'Sports', sold: 275, income: 2300 },
        { genre: 'Strategy', sold: 115, income: 667 },
        { genre: 'Action', sold: 120, income: 982 },
        { genre: 'Shooter', sold: 350, income: 5271 },
        { genre: 'Other', sold: 150, income: 3710 }
      ];

    const cols = {
        sold: { alias: '销售量' },
        genre: { alias: '游戏种类' }
    };

    let comp = (
        <Chart forceFit={true} height={500} data={data} scale={cols}>
        <Axis name="genre" title/>
        <Axis name="sold" title/>
        <Legend position="top"/>
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
    )

    return comp 
}
  
  export function getLineChart() {
   
  }
  
  export function getPieChart() {
   
  }