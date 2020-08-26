import { Modal } from 'antd'

const ModalGenerator = (segmentName, levelsData) => {
  
  return(
  Modal.info({
    title: segmentName,
    maskClosable: true,
    content: (
      levelsData.map((currentValue, index) => {
        return (
          <p>En el nivel {index+1} la persona obtuvo un puntaje de: {currentValue}/5</p>
        )
      })
    )
  }))
}

export default ModalGenerator;