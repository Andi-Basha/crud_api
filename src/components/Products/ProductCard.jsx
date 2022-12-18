import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Card className="CardContainer" style={{ width: '16rem' }}>
      <Card.Img id='card-img' variant='top' src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button className='btn btn-primary' onClick={() => onEdit(product)}>
          Edit
        </Button>
        <Button className='btn btn-danger' onClick={() => onDelete(product.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
