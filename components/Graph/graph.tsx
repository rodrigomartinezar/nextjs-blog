import * as d3 from 'd3'
import { useRef, useEffect } from 'react'

const Graph = (props) => {

  const length = props.data.length
  const xScale = d3.scaleBand()
    .domain(Array.from({length}, (v,k) => String(k+1)))
    .range([0, 500])

  const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 500])

  function randomColor(index) {
    let r = function () { return Math.floor(Math.random()*256*index) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }

  const bars = props.data.map( (currentValue, index) => {
    // const color = randomColor(currentValue);
    return (
    <rect
      key={currentValue}
      x={xScale(length-index)}
      y={(yScale(currentValue))}
      width={xScale.bandwidth()}
      height={500 - yScale(currentValue)}
      fill={'red'}
    />
    )
  })

  console.log(yScale.ticks())

  const yAxis = useRef()

  const yAxisGenerator = d3.axisLeft().scale(yScale)

  useEffect(() => {
    d3.select(yAxis.current).call(yAxisGenerator)
  })

    return (
      <div
        style={{textAlign:'center'}}
      >
        <svg
          width={500} height={500}
        >
          {bars}
          <g>
            {/* <g ref='xAxis' /> */}
            <g ref={yAxis} />
          </g>
        </svg>
      </div>
    )
    
}

export default Graph