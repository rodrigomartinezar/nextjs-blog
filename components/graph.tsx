import * as d3 from 'd3'
import React, { useEffect, ReactNode } from 'react'

const Graph = (props) => {
  /* const svgWidth = 400
  const svgHeight = 400
  
  const temperatureData = [200, 100, 300, 400 , 250]
  const barPadding = 20
  const barWidth = (svgWidth) / temperatureData.length
  const yScale = d3.scaleLinear()
                      .domain([Math.min(...temperatureData), Math.max(...temperatureData)])
                      .range([0, svgHeight])

  const xScale = d3.scaleLinear()
                    .domain([0, 5])
                    .range([0, svgWidth])
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
    >
      {temperatureData.map((data, index) =>
          <rect
            x={index*45}
            width={barWidth}
            height={data}
          />
        )}
    </svg>
  ) */

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