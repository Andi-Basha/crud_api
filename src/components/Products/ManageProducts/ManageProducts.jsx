import React from 'react';
import ModalComponent from '../../shared/ModalComponent';
import Modal from 'react-bootstrap/Modal';
import { ProductForm } from './ProductForm';

export const ManageProducts = ({onCloseModal, add, edit, product}) => {
  const handleSubmit = (formData) => {
    console.log(formData)
    product ? edit(formData) : add(formData);
    onCloseModal();
  }

  return (
    <ModalComponent show={true}>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title id='contained-modal-title-vcenter'>
          {product ? 'Edit' : 'Add'} Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm onSubmit={handleSubmit} product={product}/>
      </Modal.Body>
    </ModalComponent>
  );
};
