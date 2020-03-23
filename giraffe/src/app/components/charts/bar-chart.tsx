import React, {useEffect} from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';


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


type Props = {
    height : number;
}

function BarChartWrapped(props: Props) {
    useEffect(() => {
        console.log("new Height > " + props.height)
    })
    return (
        <Chart forceFit={true} height={props.height} data={data} scale={cols}>
        <Axis name="genre" title/>
        <Axis name="sold" title/>
        <Legend position="top"/>
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
    )
}

BarChartWrapped.defaultProps = {
    height:300
}

export default BarChartWrapped