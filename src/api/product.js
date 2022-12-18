import api from './api';

export const getProducts = (search = '') => {
  return api.get(`products/search?q=${search}`);
};

export const getProductsCategories = () => {
  return api.get(`products/categories`);
};

export const getProductsOfCategory = category => {
  return api.get(`products/category/${category}`);
};

export const deleteProduct = id => {
  return api.delete(`products/${id}`);
};

export const addProduct = product => {
  return api.post(
    'products/add',
    JSON.stringify({
      title: product.title,
      description: product.description,
      price: +product.price,
      brand: product.brand,
      stock: +product.stock,
      category: product.category,
    })
  );
};

export const editProduct = product => {
  return api.put(
    `products/${product.id}`,
    JSON.stringify({
      title: product.title,
      description: product.description,
      price: +product.price,
      brand: product.brand,
      stock: +product.stock,
      category: product.category,
    })
  );
};
