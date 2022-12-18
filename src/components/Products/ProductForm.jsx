import React, { useState } from 'react';
import { getProductsCategories } from '../../api/product';
import useFetch from '../../lib/hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useValidateForm } from '../../lib/hooks/useValidateForm';

export const ProductForm = ({product, onSubmit, onCloseModal, edit, onUpdate}) => {
  const [formData, setFormData] = useState({
    id: product ? product.id : '',
    title: product ? product.title : '',
    description: product ? product.description : '',
    price: product ? product.price : 0,
    brand:  product ? product.brand : '',
    stock: product ? product.stock : 0,
    category:  product ? product.category : '',
    thumbnail: product ? product.thumbnail : '',
  });
  
  const { data } = useFetch(getProductsCategories);
  const {formError, checkIfAllInputsAreEmpty, checkIfNumbersAreNotValid, checkIfPriceIsNotValid} = useValidateForm(formData);

  const handleInput = event => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if(checkIfAllInputsAreEmpty(formData))
      return;
    
    if(checkIfNumbersAreNotValid(formData))
      return;

    if(checkIfPriceIsNotValid(formData))
      return;
    

    if(edit) {
      onUpdate({
        id: formData.id,
        title: formData.title,
        description: formData.description,
        price: +formData.price,
        brand: formData.brand,
        stock: +formData.stock,
        category: formData.category,
        thumbnail: formData.thumbnail
      })
      onCloseModal();
      return;
    }

    onSubmit({
      id: new Date().toISOString(),
      title: formData.title,
      description: formData.description,
      price: +formData.price,
      brand: formData.brand,
      stock: +formData.stock,
      category: formData.category,
      thumbnail: formData.thumbnail
    });

    onCloseModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formError && (
        <div className='alert alert-danger' role='alert'>
          {formError}
        </div>
      )}
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Title'
          name='title'
          value={formData.title}
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Description'
          name='description'
          value={formData.description}
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter Price'
          value={formData.price}
          name='price'
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Brand'
          value={formData.brand}
          name='brand'
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Stock'
          value={formData.stock}
          name='stock'
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select Category</Form.Label>
        <Form.Select
          value={formData.category}
          onChange={handleInput}
          name='category'
          aria-label='Default select example'
        >
          <option></option>
          {data?.map(category => (
            <option key={`cat-select-${category}`} value={category}>
              {[category.split('')[0].toUpperCase(), category.slice(1)].join(
                ''
              )}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button className='mt-3' variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
