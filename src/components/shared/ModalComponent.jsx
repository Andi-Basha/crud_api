import Modal from 'react-bootstrap/Modal';

function ModalComponent(props) {

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      {props.children}
    </Modal>
  );
}

export default ModalComponent;
