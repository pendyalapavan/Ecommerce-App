import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    CLEAR_CART_FAILURE,
  } from "./ActionType";
  
  const initialState = {
    cart: null,
    loading: false,
    error: null,
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_CART_REQUEST:
        return { ...state, loading: true, error: null };
      case ADD_ITEM_TO_CART_SUCCESS:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.cartItems],
          loading: false,
        };
      case ADD_ITEM_TO_CART_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case GET_CART_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_CART_SUCCESS:
        return {
          ...state,
          cartItems: action.payload.cartItems,
          cart:action.payload,
          loading: false,
        };
      case GET_CART_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case REMOVE_CART_ITEM_REQUEST:
      case UPDATE_CART_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case REMOVE_CART_ITEM_SUCCESS:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item._id !== action.payload
          ),
          loading: false,
        };
      case UPDATE_CART_ITEM_SUCCESS:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
          loading: false,
        };
      case REMOVE_CART_ITEM_FAILURE:
      case UPDATE_CART_ITEM_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case CLEAR_CART_REQUEST:
          return {
            ...state,
            clearingCart: true,
            clearCartError: null,
          };
    
      case CLEAR_CART_SUCCESS:
          return {
            ...state,
            clearingCart: false,
          };
    
      case CLEAR_CART_FAILURE:
          return {
            ...state,
            clearingCart: false,
            clearCartError: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  