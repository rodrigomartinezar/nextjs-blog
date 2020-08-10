import Graph from '../../components/graph'
import Layout from '../../components/layout'
import Head from 'next/head'

const GraphPost = () => {
  return (
    <>
      <h1>Acá va el gráfico</h1>
      <Graph data={[1,5,10,20]}/>
    </>
  )
}

export default GraphPost