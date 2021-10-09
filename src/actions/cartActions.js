import { createTypes } from "./types";
import { cartService } from "../services/cartService"

export const cartActions = {
    addCart
}

function addCart(obj){
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());
            let cart = await cartService.addCart(obj);
            dispatch(success(cart));
        }catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.ADD_CART}
    }

    function request() {
        return {type: createTypes.ADD_CART_REQUEST}
    }

    function success(cart) {
        return {type: createTypes.ADD_CART_SUCCESS, cart}
    }

    function failure(error) {
        return {type: createTypes.ADD_CART_FAILURE, error}
    }

}