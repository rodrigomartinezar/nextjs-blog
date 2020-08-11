import { useRef } from 'react'


const SpiderChart = () => {
  
  const margin = {top:20, right:20, bottom:20, left:20}

  let innerRadius = 50
  let numSegments = 50
  let segmentHeight = 50
  let radialLabels = 50
  let segmentLabels = 50

  const arcRef = useRef()

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <div
        style={{textAlign:'center'}}
      >
        <svg
          height={500} width={500}
        >
          <g>
            <path
              ref={arcRef}
            >

            </path>
          </g>
        </svg>
      </div>
    </>
  )
}

export default SpiderChart