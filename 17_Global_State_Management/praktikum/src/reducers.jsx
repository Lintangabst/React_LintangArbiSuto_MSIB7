// src/reducers.js
const initialState = {
    products: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productFreshness: "Doe",
        productPrice: "Doe",
        image: "https://png.pngtree.com/png-clipart/20220729/original/pngtree-baju-korpri-terbaru-png-png-image_8438541.png",
        additionalDescription: "Doe",
      },
    ],
    error: null,
  };
  
  // Action types
  export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
  export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
  export const EDIT_PRODUCT = 'EDIT_PRODUCT';
  export const DELETE_PRODUCT = 'DELETE_PRODUCT';
  
  // Reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          products: [...state.products, action.payload],
          error: null,
        };
      case ADD_PRODUCT_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case EDIT_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  