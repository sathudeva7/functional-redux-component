import React from "react";

export default function Card({ title,body,location }) {

    return (
        <div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">
      {title}
    </h5>
    <p class="card-text">{body}</p>
    <a href="#" class="btn btn-primary">{location}</a>
  </div>
</div>
    )
}