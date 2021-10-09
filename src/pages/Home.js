import React, { useEffect, useState } from 'react'; 
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {homeActions} from '../actions/homeActions';

import Category from './Category';


const Home=()=>
{
  
  const dispatch = useDispatch();
  const {details,loading,error}=useSelector(state=>
    ({
      details:state.homeReducer.details,
      loading:state.homeReducer.loading,
      error:state.homeReducer.error
      }));

      const {categoryObj,loadingObj,errorObj}=useSelector(state=>
        ({
          categoryObj:state.categoryReducer.categoryObj,
          loadingObj:state.categoryReducer.loading,
          errorObj:state.categoryReducer.error
          }));

  useEffect(() => {
    dispatch(homeActions.getCardDetails());
  }, [dispatch]);

 console.log(categoryObj)
 


  return  (  <div>
      <Navbar title="We" />
      <div className="jumbotron jumbotron-fluid">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.lsretail.com/hubfs/BLOG_-ecommerce-and-the-cloud.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.codefuel.com/wp-content/uploads/2021/02/codefuel-trends.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1630422846/Algolia_com_Blog_assets/Featured_images/customers/how-to-boost-online-sales-with-category-merchandising/v5zewlldh9tsag4treuj.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <div className="jumbotron-container" >
  <div class="row">
  <div class="col-6 col-md-4"/>
  
  <div class="col-6 col-md-4"></div>
</div>

  
    <h6 >Platform to Sell and Buy</h6>
  </div>
</div>
    <Category />
    {loading === true ?<div class="loader"></div>:''}
      <div class="container">
        
  <div class="row row-cols-4">
  { categoryObj.length>0 && categoryObj.map(card=>{
        return <Card title={card.title} price={card.price} category={card.category} src={card.image} id={card.id} />

       } )}

        { details.length>0 && categoryObj.length ===0 && details.map(card=>{
        return <Card title={card.title} price={card.price} category={card.category} src={card.image} id={card.id}/>

       } )}
    
   
        </div>
  </div>


       
   
      
    
   </div>)
}

  
export default Home;