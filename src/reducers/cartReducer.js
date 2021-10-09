import { createTypes } from "../actions/types";

const initialState = {
    cart:'',
    loading:false,
    error:''
}

export function cartReducer(state = initialState,action) {
    console.log(initialState,action)
    switch(action.type){
        case createTypes.ADD_CART_REQUEST:
            return {
                ...state,
                loading: true,
                cart: '',
                error: ''
            }
        case createTypes.ADD_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                cart:action.cart
            }
        case createTypes.ADD_CART_FAILURE:
            return {
                ...state,
                loading:false,
                cart:'',
                error:action.error
            }
        default:
            return state
    }
}