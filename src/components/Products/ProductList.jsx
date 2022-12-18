import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className='ProductList'>
      {products?.map(product => (
        <ProductCard
          key={`product-card-${product.id}`}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
