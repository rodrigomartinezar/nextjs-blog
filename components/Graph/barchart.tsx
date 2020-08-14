import * as d3 from 'd3'
import { useRef, useEffect } from 'react'

const BarChart = (props) => {

  const margin = {top:20, right: 5, bottom: 20, left:35}
  const length = props.data.length


  const xScale = d3.scaleBand()
    .domain(Array.from({length}, (v,k) => String(k+1)))
    .range([margin.left, 500-margin.right])

  const {data} = props
  const yScale = d3.scaleLinear()
    .domain([0, Math.max(...data)])
    .range([500-margin.bottom, margin.top])
  
  
  console.log(Math.max(...data))
  function randomColor(index) {
    let r = function () { return Math.floor(Math.random()*256*index) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }

  const bars = props.data.map( (currentValue, index) => {
    // const color = randomColor(currentValue);
    return (
    <rect
      x={xScale(index+1)}
      y={(yScale(currentValue))}
      width={xScale.bandwidth()}
      height={500 - yScale(currentValue) - margin.bottom}
      fill={'red'}
    />
    )
  })

  const yAxis = useRef()
  const xAxis = useRef()

  const yAxisGenerator = d3.axisLeft(yAxis).scale(yScale).tickFormat(d => `${d}W`)
  const xAxisGenerator = d3.axisBottom(xAxis).scale(xScale).tickFormat(d => `${d}H`)

  useEffect(() => {
    d3.select(yAxis.current).call(yAxisGenerator)
    d3.select(xAxis.current).call(xAxisGenerator)
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
            <g
              ref={xAxis}
              transform={`translate (0, ${500 - margin.bottom})`}
            />
            <g
              ref={yAxis}
              transform={`translate (${margin.left} 0)`}
            />
          </g>
        </svg>
      </div>
    )
    
}

export default BarChart