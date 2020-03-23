import React ,{ useState }from 'react'
import { WidthProvider , Responsive , Layout, Layouts} from 'react-grid-layout'
import _ from 'lodash'
import { widget } from 'app/types';
import {Layout as AntLayout, Button} from 'antd'
import {getBarChart, ChartType} from './charts'
import BarChartWrapped from 'app/components/charts/bar-chart';
import LineChart from 'app/components/charts/line-chart';
import LineRealtime from 'app/components/charts/realtime-line-chart';
import G2PlotBaseChart from 'app/components/g2plot/base-chart';



const  { Header, Content} = AntLayout;
const ResponsiveReactGridLayout = WidthProvider(Responsive)



type State = {
    widgets: widget[]
    layouts : Layouts
    cols : number
}

type Cols = {
    lg : number;
    md: number;
    sm: number;
    xs: number;
    xxs:number;
}

type Props = {
    cols : Cols;
    rowHeight:number
}

const initialState : State = {
    widgets : new Array<widget>(),
    layouts : {
        lo : new Array<Layout>()
    },
    cols:0
}

function Layout3  (props : Props ) {
    const [state, setState] = useState<State>( initialState );

    function onRemoveItem(idx:string) {
        setState({
            ...state,
            widgets: state.widgets.filter((item, index) => item.layout.i !== idx)
        })
    }
    
    function generateDOM() {
        return _.map(state?.widgets, (l:widget, i:number)=>{
             let ele : JSX.Element | null = null;
            let lo = l.layout;
            switch (l.type) {
                case ChartType.Bar:
                    ele = (
                        <BarChartWrapped key={lo.i} height={lo.h * props.rowHeight}></BarChartWrapped>
                    );
                    break;
                case ChartType.Line:
                    ele = (
                        <LineChart key={lo.i} height={lo.h * props.rowHeight}></LineChart>
                    )
                    break;
                case ChartType.Pie :
                    ele = (
                        <LineRealtime key={lo.i} height={lo.h * props.rowHeight}></LineRealtime>
                    )
                    break;
                case ChartType.G2Bar:
                    ele = (
                        <G2PlotBaseChart></G2PlotBaseChart>
                    )
                    break;
                default:
                    break;
            }

            return (
                <div key={lo.i} data-grid={lo}>
                    <span className='remove' onClick={()=>{ onRemoveItem(lo.i) }}>x</span>
                     {ele}
                </div>
            )
        }) 
    }

    function addChart(chartType:string) {
        const addItem : widget = {
            layout :  {
          
                    x : (state.widgets.length * 3 ) % (state.cols || 12),
                    y: Infinity,
                    w:3,
                    h:2,
                    i: new Date().getTime().toString()
              
            },
            type:chartType,
        }

        setState({
            ...state,
            widgets: state.widgets.concat( addItem)
        })
    }


    function onLayoutChange(layout : Layout[], layouts: Layouts) {
        console.log("Layouts > ", layouts)
        console.log("State.widget.layouts > ", state.widgets)
        let log = ""
        type LO = {
            [P:string] : Layout
        }
        let dictLayout : LO  = {}
        layout.forEach( l => {
            dictLayout[l.i] = l
        })

        // console.log("Chang")

        setState({
            ...state,
            widgets: _.map(state.widgets, (w :widget, i : number)  => {
                
                return {
                    type:w.type,
                    layout: {
                        ...w.layout,
                        h: dictLayout[w.layout.i] ? dictLayout[w.layout.i].h : w.layout.h
                    }
                }
            })
        })
    }

    return (
        <AntLayout key={'000'}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%','padding': '0 30px' }}>
        <Button type="primary" style={{'marginRight':'7px'}} onClick={()=> addChart(ChartType.Bar) }>添加柱状图</Button>
        <Button type="primary" style={{'marginRight':'7px'}} onClick={()=>addChart(ChartType.Line)}> 添加折线图</Button>
        <Button type="primary" style={{'marginRight':'7px'}} onClick={()=>addChart(ChartType.Pie)}>添加饼图</Button>
        <Button type="primary" style={{'marginRight':'7px'}} onClick={()=>addChart(ChartType.G2Bar)}>添加G2Bar</Button>
      </Header>


      <Content style={{marginTop:44}} >
          <div style={{ background: '#fff', padding: 20, minHeight: 800 }}>
          <ResponsiveReactGridLayout
            className="layout"
            {...props}
            layouts={state.layouts}
              onLayoutChange={(layout, layouts) =>
                onLayoutChange(layout, layouts)
              }
          >
            {generateDOM()}
          </ResponsiveReactGridLayout>
          </div>
      </Content>
        </AntLayout>
    )
   
}

Layout3.defaultProps = {
    rowHeight : 100,
    cols:{lg:12, md:10, sm:6,xs:4, xxs:2}
}

export default Layout3