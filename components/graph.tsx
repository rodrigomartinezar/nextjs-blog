import * as d3 from 'd3'
import React from 'react'
import { useState } from 'react'

const Graph = () => {
  const svgWidth = 400
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
  )
}

export default Graph