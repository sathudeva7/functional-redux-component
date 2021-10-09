import { createTypes } from "../actions/types";

const initialState = {
    details:'',
    loading: false,
    error: '',
    card:''
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
        case createTypes.SET_CARD_REQUEST:
            return{
                ...state,
                loading:true,
                card:'',
                error:''
            }
        case createTypes.SET_CARD_SUCCESS:
            return{
                ...state,
                loading:false,
                card:action.card,
                error:''
            }
        case createTypes.SET_CARD_FAILURE:
            return{
                ...state,
                loading:false,
                card:'',
                error:action.error
            }
        default:
            return state
    }
}
