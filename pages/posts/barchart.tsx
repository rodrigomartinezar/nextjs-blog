import BarChart from '../../components/Graph/barchart'
import { useState, useEffect } from 'react'
import { Input } from 'antd'

const BarChartPost = () => {
  const [datos, setDatos] = useState([30,2,5,10])
  /* const [inputValue, setInputValue] = useState(0) */


  const updateDatos = (e) => {
    setDatos([...datos, e.target.value])
  }

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <BarChart data={datos}/>
      <Input
        type='number'
        onPressEnter={updateDatos}
      />
    </>
  )
}

export default BarChartPost