import Graph from '../../components/Graph/graph'
import { useEffect } from 'react'
import { Input } from 'antd'

const GraphPost = () => {
  const datos = [30,2,5,10]



  return (
    <>
      <h1>Acá va el gráfico</h1>
      <Graph data={datos}/>
    </>
  )
}

export default GraphPost