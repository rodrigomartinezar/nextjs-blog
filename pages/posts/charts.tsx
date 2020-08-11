import Graph from '../../components/Graph/graph'
import { useState, useEffect } from 'react'
import { Input } from 'antd'

const GraphPost = () => {
  const [datos, setDatos] = useState([30,2,5,10])
  /* const [inputValue, setInputValue] = useState(0) */


  const updateDatos = (e) => {
    setDatos([...datos, e.target.value])
  }

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <Graph data={datos}/>
      <Input
        type='number'
        onPressEnter={updateDatos}
      />
      {/* <p>{inputValue}</p> */}
      {/* {datos.map(d => (
        <p>{d}</p>
      ))} */}
    </>
  )
}

export default GraphPost