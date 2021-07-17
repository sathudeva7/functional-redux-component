import { createTypes } from "../actions/types";

const initialState = {
    details:'',
    loading: false,
    error: ''
}

export function homeReducer(state = initialState, action){
    console.log(action.type)
    switch (action.type){
        case createTypes.GET_CARD_DETAILS_REQUEST:
            return{
                ...state,
                loading: true,
                details: '',
                error: ''
            }
        case createTypes.GET_CARD_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                details: action.details,
                error: ''
            }
        case createTypes.GET_CARD_DETAILS_FAILURE:
            return{
                ...state,
                loading: false,
                details: '',
                error: action.error
            }
        default:
            return state
    }
}
