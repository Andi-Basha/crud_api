import React from 'react';
import ModalComponent from '../shared/ModalComponent';
import Modal from 'react-bootstrap/Modal';
import { ProductForm } from './ProductForm';

export const AddNewProduct = ({onSubmit, onCloseModal}) => {
  return (
    <ModalComponent show={true}>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm onSubmit={onSubmit} onCloseModal={onCloseModal}/>
      </Modal.Body>
    </ModalComponent>
  );
};
