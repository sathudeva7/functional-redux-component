import { createTypes } from "../actions/types";

const initialState = {
    category:'',
    loading:false,
    error:'',
    categoryObj:''
}

export function categoryReducer(state = initialState,action) {
    switch(action.type){
        case createTypes.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                category: '',
                error: ''
            }
        case createTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.category,
                error: ''
            }
        case createTypes.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading:false,
                category:'',
                error:action.error
            }
        
      
            case createTypes.SET_CATEGORY_REQUEST:
                return {
                    ...state,
                    loading: true,
                    categoryObj: '',
                    error: ''
                }
            case createTypes.SET_CATEGORY_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    categoryObj: action.categoryObj,
                    error: ''
                }
            case createTypes.SET_CATEGORY_FAILURE:
                return {
                    ...state,
                    loading:false,
                    categoryObj:'',
                    error:action.error
                }
        default:
            return state
    }
}