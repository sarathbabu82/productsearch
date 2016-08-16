import React from 'react';

export default class Product extends React.Component {	
	
   constructor(props) {
		super(props)
  }	
  
  
  render() {
	var product=this.props.product
	  
	var starWidth={
		width: ((product.rating*5.33)) +"%"
	}  
	return ( 
			<div className="product"> 
				<div className="product-desc">{product.title}</div>
				<img  className="product-img" src={"/img/" +product.id+".jpg"} /> 
				
				<div className="product-star"> 
					<div className="star-ratings-css">
							  <div className="star-ratings-css-bottom" ><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> <span>{ " (" + product.numberofVote+" ratings)"} </span></div>
							  <div className="star-ratings-css-top" style={starWidth} ><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>  </div>
					</div>
				</div>
				
				<div className="product-price">Rs.{product.price}</div>
				<div className="product-emi">EMI from {product.price}</div>
				<div className="product-varients">{product.variants}</div>					
			
			</div>
		)
  }
  
}