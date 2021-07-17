import { createTypes } from "./types";
import { homeService } from "../services/homeServices";

export const homeActions = {
    getCardDetails
}


function getCardDetails(){
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());
            let details = await homeService.getCardDetails();
            dispatch(success(details));
        }catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.GET_CARD_DETAILS}
    }

    function request() {
        return {type: createTypes.GET_CARD_DETAILS_REQUEST}
    }

    function success(details) {
        return {type: createTypes.GET_CARD_DETAILS_SUCCESS, details}
    }

    function failure(error) {
        return {type: createTypes.GET_CARD_DETAILS_FAILURE, error}
    }
}