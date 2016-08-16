import React from 'react';
import  Product from './elements/Product';


export default class ProductListPage extends React.Component {	
	
   constructor(props) {
		super(props)
  }	
  
  
  render() {
				var productList = this.props.products.map((product) => {
					return ( <Product key={product.id} product={product} />   );
				});

				return ( 
					 <div className="flex-container">							
							{productList}
					 </div>
				)
	  }
}
  
