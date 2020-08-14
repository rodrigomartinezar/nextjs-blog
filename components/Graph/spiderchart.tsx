import { useRef, useEffect } from 'react'
import * as d3 from 'd3'


const SpiderChart = () => {
  
  const margin = {top:20, right:20, bottom:20, left:20}

  let innerRadius = 50
  let numSegments = 50
  let segmentHeight = 50
  let radialLabels = 50
  let segmentLabels = 50

  const arcRef = useRef()

  function innerRadiusCalculation (d, i) {
    return innerRadius + Math.floor(i/numSegments) * segmentHeight
  }

  useEffect(() => {
    const arc = d3.arc()
                  .innerRadius(50)
                  .outerRadius(100)
                  .startAngle(0)
                  .endAngle(Math.PI / 2)

    d3.select(arcRef.current)
      .attr("d", arc)
      .attr('fill', 'red')
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
            transform={
              `translate(
                ${(500 - (margin.left + margin.right))/2},
                ${230})`
              }
          >
            <path
              ref={arcRef}
            >
              hgola
            </path>
          </g>
        </svg>
      </div>
    </>
  )
}

export default SpiderChart