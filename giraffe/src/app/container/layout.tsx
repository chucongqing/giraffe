import React from 'react'
import GridLayout from 'react-grid-layout'
import {generateRandomLayout, generateDOM} from './layoutHelper'

type Props = {
  fake : boolean
}

function MyGrid (props : Props) {
    const layout = generateRandomLayout(20)
      return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          {
            generateDOM(20)
          }
        </GridLayout>
      )
}

MyGrid.defaultProps = {
  fake: true
}

export default MyGrid;