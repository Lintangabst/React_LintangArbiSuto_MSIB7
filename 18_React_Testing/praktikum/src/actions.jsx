import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, EDIT_PRODUCT, DELETE_PRODUCT } from './reducers';

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const addProduct = (product) => {
  return (dispatch, getState) => {
    const { products } = getState();
    const productExists = products.find((p) => p.productName === product.productName);

    if (productExists) {
      dispatch(addProductError("Product Name already exists"));
    } else {
      dispatch(addProductSuccess(product));
    }
  };
};
