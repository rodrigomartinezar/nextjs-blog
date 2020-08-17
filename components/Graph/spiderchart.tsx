import { useRef, useEffect } from 'react'
import * as d3 from 'd3'


const SpiderChart = (props) => {
  
  const margin = {top:20, right:20, bottom:20, left:20}

  const {number_of_levels} = props
  const number_of_segments = 3
  const padding = 35
  const angle = Math.PI/4
  const padding_between_segments = 2
  const chartRef = useRef()

  const colorArray = {
    1: '#41D38C',
    2: '#2EAB6D',
    3: '#6D03D7'
  }

  useEffect(() => {
    for (let j = 1; j<number_of_segments+1; j++){
      for (let i = 0; i<number_of_levels; i++){
        const arc1 = d3.arc()
                      .innerRadius(50 + padding*i)
                      .outerRadius(80 + padding*i)
                      .startAngle(angle*(j-1))
                      .endAngle(angle*j)

        d3.select(chartRef.current)
          .append('path')
          .attr("d", arc1)
          .attr('fill', colorArray[i])
      }
    }
    /* const arc2 = d3.arc()
                  .innerRadius(125)
                  .outerRadius(175)
                  .startAngle(0)
                  .endAngle(Math.PI / 2)
    
    d3.select(chartRef.current)
      .append('path')
      .attr("d", arc2)
      .attr('fill', 'red') */
      //.attr(`transform, translate(${500-40/2}, ${500-40/2})`)
  })

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <div
        style={{textAlign:'center'}}
      >
        <svg
          height={500} width={500}
        >
          <g
            ref={chartRef}
            transform={
              `translate(
                ${(500 - (margin.left + margin.right))/2},
                ${230})`
              }
          >
          </g>
        </svg>
      </div>
    </>
  )
}

export default SpiderChart