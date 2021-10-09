import React, { useEffect } from 'react'
import Card from '../Components/Card';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {categoryActions} from '../actions/categoryActions';


export default function Category() {

    const dispatch = useDispatch();
    const { category,loading,error } = useSelector(state =>
        ({
            category:state.categoryReducer.category,
            loading:state.categoryReducer.loading,
            error:state.categoryReducer.error
       }));
    
    useEffect(() => {
        dispatch(categoryActions.getCategories());
    },[dispatch]);

    
        async function selectCategory(category) {
            console.log(category)
            await dispatch(categoryActions.setCategory(category))
            
        }


   
    

    return (        
        <div class="container">
            <div class="row row-cols-4">
                {category.length>0 && category.map(category=>{
                return <button type="button" class="btn btn-outline-secondary" onClick={()=>selectCategory(category)}>{category}</button>
                })} 
                {category.length>0 &&  <button type="button" class="btn btn-outline-secondary" onClick={()=>selectCategory(category)}>All</button>}
               
            </div>
        </div>
    )
}
