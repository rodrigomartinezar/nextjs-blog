import * as d3 from 'd3'
import './graph.module.css'

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
  const color = randomColor(index+1);
  return (
  <rect
    key={currentValue}
    x={xScale(length-index)}
    y={(yScale(currentValue))}
    width={xScale.bandwidth()}
    height={500 - yScale(currentValue)}
    fill={color}
  />
  )
})
  return (
    <div
      style={{textAlign:'center'}}
    >
      <svg
        width={500} height={500}
      >
        {bars}
      </svg>
    </div>
  )
  
}

export default Graph