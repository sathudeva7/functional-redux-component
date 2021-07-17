import React, { useEffect, useState } from 'react'; 
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {homeActions} from '../actions/homeActions';
const Home=()=>
{
  
  const dispatch = useDispatch();
  const {details,loading,error}=useSelector(state=>
    ({
      details:state.homeReducer.details,
      loading:state.homeReducer.loading,
      error:state.homeReducer.error
      }));
  useEffect(() => {
    dispatch(homeActions.getCardDetails());
  }, [dispatch]);
 
  return  (  <div>
      <Navbar title="We" />
      {details.length>0 && details.map(card=>{
        return <Card title={card.title} body={card.body} location={card.location} />
       } )}
   </div>)
}

  
export default Home;