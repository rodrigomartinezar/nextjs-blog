import { Modal } from 'antd'

const ModalComponent = (segment) => {
  Modal.info({
    title: segment,
    style: { top: 0, height: '83vh' },
    content: (
      <div>Hola {segment}</div>
    )
  })
}

export default ModalComponent;