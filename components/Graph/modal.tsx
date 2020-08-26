import { Modal } from 'antd'

const ModalComponent = (segmentName) => {
  Modal.info({
    title: segmentName,
    content: (
      <div>Hola {segmentName}</div>
    )
  })
}

export default ModalComponent;