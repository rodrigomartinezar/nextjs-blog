import { useRef, useEffect } from 'react'
import * as d3 from 'd3'


const SpiderChart = (props) => {
  
  const margin = {top:20, right:20, bottom:20, left:20}

  const {formData} = props
  const number_of_segments = Object.keys(formData).length
  const number_of_levels = formData['Internet'].length
  const padding = 55
  const angle = (2*Math.PI) / number_of_segments
  const padding_between_segments = Math.PI/90
  const chartRef = useRef()

  const colorArray = {
    0: '#C0C0C0',
    1: '#41D38C',
    2: '#2EAB6D',
    3: '#6D03D7',
    4: '#460388',
    5: '#28024E'
  }

  useEffect(() => {
    for (let j = 1; j<number_of_segments+1; j++){
      for (let i = 0; i<number_of_levels; i++){
        const arc1 = d3.arc()
                      .innerRadius(50 + padding*i)
                      .outerRadius(100 + padding*i)
                      .startAngle(angle*(j-1) + padding_between_segments)
                      .endAngle(angle*j - padding_between_segments)

        if (i == number_of_levels-1){                      
          d3.select(chartRef.current)
            .append('path')
            .attr("d", arc1)
            .attr('fill', colorArray[formData[Object.keys(formData)[j-1]][i]])
            .attr('id', Object.keys(formData)[j-1])
        } else {
            d3.select(chartRef.current)
              .append('path')
              .attr("d", arc1)
              .attr('fill', colorArray[formData[Object.keys(formData)[j-1]][i]])
        }
      }
      d3.select(chartRef.current)
        .append('text')
        .append('textPath')
        .attr('href', `#${Object.keys(formData)[j-1]}`)
        .text(Object.keys(formData)[j-1])
    }
  })

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <div
        style={{textAlign:'center'}}
      >
        <svg
          height={700} width={700}
        >
          <g
            ref={chartRef}
            transform={
              `translate(
                ${350},
                ${350})`
              }
          >
          </g>
        </svg>
      </div>
    </>
  )
}

export default SpiderChart