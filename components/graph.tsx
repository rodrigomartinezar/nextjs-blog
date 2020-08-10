import * as d3 from 'd3'
import React, { useEffect, ReactNode } from 'react'

const Graph = (props) => {

const length = props.data.length
const xScale = d3.scaleBand()
  .domain(Array.from({length}, (v,k) => String(k+1)))
  .range([0, 500])

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500])


const bars = props.data.map( (currentValue, index) => (
  <rect
    key={currentValue}
    x={xScale(index+1)}
    y={(yScale(currentValue))}
    width={xScale.bandwidth()}
    height={500 - yScale(currentValue)}
  />
))
  return (
    <svg
      width={500} height={500}
    >
      {bars}
    </svg>
  )
  
}

export default Graph