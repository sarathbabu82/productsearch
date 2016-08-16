import React from 'react';
import { render } from 'react-dom';
import * as Actions from "./Actions/ProductActions";
import  Store from './Store/ProductStore';
import  ProductListPage from './Components/ProductListPage';
import  SearchField from './Components/elements/SearchField';
import  FilterOption from './Components/elements/FilterOption';

class ProductSearch extends React.Component {
  
   constructor(props) {
		super(props)
		this.searchHandler=this.searchHandler.bind(this);
		this.state = {
			products: Store.getProductList() || [] 
		};
  }	
  
  componentDidMount() {
      Store.on("change", this.getProducts.bind(this))
  }
  
  componentWillUnmount() {
       Store.removeListener("change", this.getProducts);
  }

  getProducts(){
	  this.setState({
			  products: Store.getProductList()
		});
  }
  
  searchHandler(searchKey){
	  Actions.searchProducts(searchKey);
  }
  
  render() {	
	const { products } = this.state;
		return (
				<div>
				      <SearchField searchHandler={this.searchHandler} />
					  <FilterOption />
				      <ProductListPage products={products} />
				</div>
		)
  }
  
}

render(<ProductSearch />, document.getElementById('container'));

