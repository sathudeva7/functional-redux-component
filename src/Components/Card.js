import React, { useEffect, useState } from "react";
import {homeActions} from '../actions/homeActions';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

export default function Card(props) {
  const [title,setTitle] = useState(props.title);
  const [alone,setAlone] = useState(false)

  const dispatch = useDispatch();
  
  async function details  (title,price,src,id) {
    setTitle(title)
    await dispatch(homeActions.setCard({title,price,src,id}))
    setAlone(true)
  }

  

  if(alone===true){
    return <Redirect to='/card' />
  }
  

    return (
     

    

  <div class="card" >
    <img class="card-img-top" src={props.src} alt="Card image cap"/>
    
    <div >
      <small class="card-title">{title}</small>
      <div >$ {props.price}</div>
      <div className="button-right">
      <button type="button" className="btn btn-primary" onClick={()=>{details(props.title,props.price,props.src,props.id)}}>Order</button>
      </div>
    </div>
  </div>
 
      
    )
}