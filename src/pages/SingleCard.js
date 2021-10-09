import React, { Component } from 'react'
import { connect } from "react-redux";
import { homeActions } from '../actions/homeActions';
import { cartActions } from '../actions/cartActions';
import Navbar from '../Components/Navbar';

class SingleCard extends Component {
    constructor(props){
        super(props);

    }

    async addCart(obj) {
        let id = obj.id
        console.log(obj)
        await this.props.addCart({id})
        
    }


    render() {
        
        return (
            <div>
                <Navbar title="We" />

               
                <div class="container-singlecard">
                    <div class="image"> <a href="#"> <img className="img-single" src={this.props.card.image} /></a></div>
                    <div class="title"> <a href="#" class="text-primary btn-link">{this.props.card.category} </a>
                 
                                <h3 class="title">{this.props.card.title}</h3></div>
                                
                    <div class="description">  {this.props.card.description} <div class="mb-3">
                                    <var class="price h4">$ {this.props.card.price}</var> <br />
                                  
                                </div> 
        
                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary mr-1">Buy now</a>
                                    <a href="#" class="btn btn-light" onClick={()=>this.addCart(this.props.card)}>Add to card</a>
                                </div></div>
                    
                </div>
                
{/* <section class="section-content padding-y bg">
        <div class="container">
    
        <article class="cards">
            <div class="cards-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class=" img-big-wrap">
                                        <a href="#"> <img className="img-single" src={this.props.card.image} /></a>
                                    </div> 
                                    
                                </article>
                        </aside>
                        <main class="col-md-6">
                            <article>
                                <a href="#" class="text-primary btn-link">{this.props.card.category} </a>
                                <h3 class="title">{this.props.card.title}</h3>
                                <div>
                                
                                    <span class="label-rating mr-3 text-muted">{this.props.card.rating.rate} / 5 </span>
                                    
                                </div> 
        
                                <hr />
                    
                                <div class="mb-3">
                                    
                                    <ul class="list-dots mb-0">
                                        {this.props.card.description} 
                                        
                                    </ul>
                                </div>
                                
        
                                <div class="mb-3">
                                    <var class="price h4">$ {this.props.card.price}</var> <br />
                                  
                                </div> 
        
                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary mr-1">Buy now</a>
                                    <a href="#" class="btn btn-light">Add to card</a>
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        
        </div>
        
    
    </section> */}


  </div>
        )
    }
}

function mapStateToProps(state){
    return {
        card:state.homeReducer.card,
        cart:state.cartReducer.cart
    }
}

const mapActionsToProps = {
    setCard : homeActions.setCard,
    addCart : cartActions.addCart
}

export default connect(mapStateToProps, mapActionsToProps)(SingleCard);
