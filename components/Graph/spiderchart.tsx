import { useRef, useEffect } from 'react'
import * as d3 from 'd3'


const SpiderChart = (props) => {
  
  const margin = {top:20, right:20, bottom:20, left:20}

  const {number_of_levels} = props
  let innerRadius = 50
  let numSegments = 50
  let segmentHeight = 50
  let radialLabels = 50
  let segmentLabels = 50

  const chartRef = useRef()

  function innerRadiusCalculation (d, i) {
    return innerRadius + Math.floor(i/numSegments) * segmentHeight
  }

  useEffect(() => {
    for (let i = 0; i<number_of_levels; i++){
      const arc1 = d3.arc()
                    .innerRadius(50 + 45*i)
                    .outerRadius(75 + 45*i)
                    .startAngle(0)
                    .endAngle(Math.PI / 2)

      d3.select(chartRef.current)
        .append('path')
        .attr("d", arc1)
        .attr('fill', 'red')
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