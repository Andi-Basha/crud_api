import { useState, useEffect } from 'react';
import { addProduct, deleteProduct, editProduct } from '../../api/product';
import useNotificationContext from './useNotificationContext';

const useFetch = (apiFunction, search) => {
  const {addProductNotification, editProductNotification, deleteProductNotification} = useNotificationContext();
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(apiFunction, search);
  }, [search]);

  const fetchData = async (apiFunction, search) => {
    try {
      const res = await apiFunction(search);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async id => {
    try {
      const res = await deleteProduct(id);
      setData(prevState => {
        return {
          ...prevState,
          products: [...prevState.products.filter(prod => prod.id !== id)],
        };
      });
      deleteProductNotification();
    } catch (error) {
      setError(error.message);
    }
  };
  
  const createProduct = async product => {
    try {
      const res = await addProduct(product);
      setData(prevState => {
        return {
          ...prevState,
          products: [...prevState.products, product],
          // products: [...prevState.products, {id: res.data.id, ...product}]
        };
      });
      addProductNotification();
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async product => {
    try {
      const res = await editProduct(product);

      setData(prevState => {
        const updatedProducts = prevState.products.map(p => {
          if (p.id !== product.id) {
            return p;
          }
          return product;
        });

        return {
          ...prevState,
          products: [...updatedProducts],
        };
      });
      editProductNotification();
    } catch (err) {
      console.log(err);
    }
  };

  const refetch = (apiFunction, search) => {
    fetchData(apiFunction, search);
  };

  return {
    data,
    loading,
    error,
    createProduct,
    updateProduct,
    removeProduct,
    refetch,
  };
};

export default useFetch;
