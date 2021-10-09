import { createTypes } from "./types";
import { categoryService } from "../services/categoryService";

export const categoryActions = {
    getCategories,
    setCategory
}

function getCategories(){
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());
            let category = await categoryService.getCategories();
            dispatch(success(category));
        }catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.GET_CATEGORIES}
    }

    function request() {
        return {type: createTypes.GET_CATEGORIES_REQUEST}
    }

    function success(category) {
        return {type: createTypes.GET_CATEGORIES_SUCCESS, category}
    }

    function failure(error) {
        return {type: createTypes.GET_CATEGORIES_FAILURE, error}
    }
}

function setCategory(obj){
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());
            let categoryObj = await categoryService.setCategory(obj);
            dispatch(success(categoryObj));
        }catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.SET_CATEGORY}
    }

    function request() {
        return {type: createTypes.SET_CATEGORY_REQUEST}
    }

    function success(categoryObj) {
        return {type: createTypes.SET_CATEGORY_SUCCESS, categoryObj}
    }

    function failure(error) {
        return {type: createTypes.SET_CATEGORY_FAILURE, error}
    }
}