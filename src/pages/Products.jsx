import React, { useState } from "react";
import { getProducts, getProductsOfCategory } from "../api/product";
import { ProductFilter } from "../components/Products/ProductFilter";
import { ProductList } from "../components/Products/ProductList";
import { HandleLoading } from "../components/shared/HandleLoading";
import { HandleError } from "../components/shared/HandleError";
import { ManageProducts } from "../components/Products/ManageProducts/ManageProducts";
import useDebounce from "../lib/hooks/useDebounce";
import useFetch from "../lib/hooks/useFetch";
import { ToastNotification } from "../components/shared/ToastNotification";
import useNotificationContext from "../lib/hooks/useNotificationContext";
import { SideNotes } from "../components/SideNotes/SideNotes";
import NoteProvider from "../lib/context/NoteProvider";

export const Products = () => {
  const [search, setSearch] = useState("");
  const [activateCategory, setActivateCategory] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const debaunceValue = useDebounce(search);

  const { showNotification } = useNotificationContext();

  const {
    data,
    loading,
    error,
    createProduct,
    updateProduct,
    removeProduct,
    refetch,
  } = useFetch(getProducts, debaunceValue);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setActivateCategory(undefined);
  };

  const handleFilterCategory = (category) => {
    refetch(getProductsOfCategory, category);
    setActivateCategory(category);
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
    setShowModal((prevState) => !prevState);
  };

  const handleDelete = (prodId) => {
    removeProduct(prodId);
  };

  return (
    <HandleLoading loading={loading}>
      <HandleError error={error}>
        {showModal && (
          <ManageProducts
            onCloseModal={() => {
              setShowModal((prevState) => !prevState);
              setProductToEdit(null);
            }}
            edit={updateProduct}
            add={createProduct}
            product={productToEdit}
          />
        )}
        <div className="ProductsWrapper">
          <div className="Products">
            <ProductFilter
              activeCategory={activateCategory}
              onChange={handleFilterCategory}
            />
            <div className="Products__content">
              {showNotification}
              <div className="productFilterInput">
                <div className="w-100 d-flex mb-3">
                  <input
                    type="text"
                    className="form-control mr-3"
                    placeholder="Search products"
                    value={search}
                    onChange={handleSearch}
                  />
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setShowModal((prevState) => !prevState)}
                  >
                    Add New Product
                  </button>
                </div>
              </div>
              <ProductList
                products={data.products}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
            <NoteProvider>
              <SideNotes />
            </NoteProvider>
          </div>
        </div>
      </HandleError>
    </HandleLoading>
  );
};
