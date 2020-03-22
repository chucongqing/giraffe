import React from 'react'
import GridLayout from 'react-grid-layout'
import {generateRandomLayout, generateDOM} from './layoutHelper'


function MyGrid () {
    const layout = generateRandomLayout(20)
      return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          {
            generateDOM(20)
          }
        </GridLayout>
      )
}

export default MyGrid;