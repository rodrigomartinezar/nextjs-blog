import { Modal } from 'antd'

const ModalComponent = (segmentName) => {
  Modal.info({
    title: segmentName,
    maskClosable: true,
    content: (
      <div>Hola {segmentName}</div>
    )
  })
}

export default ModalComponent;