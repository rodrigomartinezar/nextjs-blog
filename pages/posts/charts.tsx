import Graph from '../../components/Graph/graph'
import Head from 'next/head'

const GraphPost = () => {
  return (
    <>
      <h1>Acá va el gráfico</h1>
      <Graph data={[2,4,6,8]}/>
    </>
  )
}

export default GraphPost