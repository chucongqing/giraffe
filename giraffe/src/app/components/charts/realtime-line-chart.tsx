import React , {useState, useEffect}from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

type DataType = {
    time : number;
    temperature: number;
    type : string;
}




const scale = {
  time: {
    alias: "时间",
    type: "time",
    mask: "MM:ss",
    tickCount: 10,
    nice: false
  },
  temperature: {
    alias: "平均温度(°C)",
    min: 10,
    max: 35
  },
  type: {
    type: "cat"
  }
};

type Props = {
    height: number
}

type State = {
    data : DataType[];
    chart ?: G2.Chart;
}

const initState : State = {
    data : new Array<DataType>()
}
export const SliderChart :React.FC<Props> = (props)=> {

    const [ state, setState] = useState(initState)

   

    useEffect( ()=> {
      setInterval(() => {
        var now = new Date();
        var time = now.getTime();
        var temperature1 = ~~(Math.random() * 5) + 22;
        var temperature2 = ~~(Math.random() * 7) + 17;

       
        // console.log("? wtf?")

        setState((preState) => {
            if (preState.data.length >= 200) {
                preState.data.shift();
                preState.data.shift();
              }
      
              preState.data.push({
                time: time,
                temperature: temperature1,
                type: "记录1"
              });
              preState.data.push({
                time: time,
                temperature: temperature2,
                type: "记录2"
              });

            return {
                ...preState
            }
        });
      }, 1000);
    }, [])
   
   

    return (
        <Chart
          data={state.data}
          scale={scale}
          height={props.height}
          forceFit
          onGetG2Instance={g2Chart => {
            setState({
                ...state,
                chart : g2Chart
            })
          }}
        >
          <Tooltip />
          {state.data.length !== 0 ? <Axis /> : ''}
          <Legend />
          <Geom
            type="line"
            position="time*temperature"
            color={["type", ["#ff7f0e", "#2ca02c"]]}
            shape="smooth"
            size={2}
          />
        </Chart>
      );
}

function LineRealtime (props: Props) {
  
    return (
      <div>
        <SliderChart {...props}/>
      </div>
    );
  
}

export default LineRealtime