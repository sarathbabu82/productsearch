import { EventEmitter } from "events";

import dispatcher from "../Dispatcher/dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super()
    this.productList= [
				{
				   id: 	"001",
				   name:"Sony Cyber Camera",
				   title:"Canon IXUS 175 20 MP Point & Shoot Camera (Red) + 8 GB SDHC Card + Case + Interface Cable",
				   rating: "4.5",
				   numberofVote:"234",
				   variants:"Attractive EMI Options Available <br> 8x Optical Zoom  <br> 4x Digital Zoom <br> CMOS Sensor,Size:1/2.3 type <br> Screen Size :6.85 cm (2.7\")",
				   emi: "2000",
				   price: "30000",
				   productType:"camera",
				   createdAt:"2013-02-15T15:12:21-05:00",
				   updatedAt:"2016-02-15T15:12:21-05:00"
				},
				{
				   id: 	"002",
				   name:"Nikon Cyber Camera",
				   title:"Nikon Coolpix S3700 20.1 MP Point & Shoot Camera (Red) + Carry Case + 8GB SD Card",
				   rating: "2.0",
				   numberofVote:"34",
				   variants:"Attractive EMI Options Available <br> 8x Optical Zoom  <br> 4x Digital Zoom <br> CMOS Sensor,Size:1/2.3 type <br> Screen Size :6.85 cm (2.7\")",
				   emi: "1000",
				   price: "10000",
				   productType:"camera",
				   createdAt:"2014-05-15T15:12:21-05:00",
				   updatedAt:"2013-07-15T15:12:21-05:00"
				},
				{
				   id: 	"003",
				   name:"Canon Cyber Camera",
				   title:"Canon IXUS 175 20 MP Point & Shoot Camera (Red) + 8 GB SDHC Card + Case + Interface Cable",
				   rating: "4.0",
				   numberofVote:"234",
				   variants:"Attractive EMI Options Available <br> 8x Optical Zoom  <br> 4x Digital Zoom <br> CMOS Sensor,Size:1/2.3 type <br> Screen Size :6.85 cm (2.7\")",
				   emi: "1000",
				   price: "10000",
				   productType:"camera",
				   createdAt:"2012-04-15T15:12:21-05:00",
				   updatedAt:"2016-02-15T15:12:21-05:00"
				},
				{
				   id: 	"004",
				   name:"Nikon Coolpix Camera",
				   title:"Nikon Coolpix S3700 20.1 MP Point & Shoot Camera (Red) + Carry Case + 8GB SD Card",
				   rating: "3.5",
				   numberofVote:"19",
				   variants:"Attractive EMI Options Available <br> 8x Optical Zoom  <br> 4x Digital Zoom <br> CMOS Sensor,Size:1/2.3 type <br> Screen Size :6.85 cm (2.7\")",
				   emi: "4000",
				   price: "40000",
				   productType:"camera",
				   createdAt:"2013-07-15T15:12:21-05:00",
				   updatedAt:"2016-05-15T15:12:21-05:00"
				},
				{
				   id: 	"005",
				   name:"Fastrack(Blue Round)",
				   title:"Fastrack 38002PP03 Blue Round Analog Watch",
				   rating: "4.5",
				   numberofVote:"20",
				   variants:"Attractive EMI Options Available <br> 8x Optical Zoom  <br> 4x Digital Zoom <br> CMOS Sensor,Size:1/2.3 type <br> Screen Size :6.85 cm (2.7\")",
				   emi: "1000",
				   price: "10000",
				   productType:"watch",
				   createdAt:"2012-02-15T15:12:21-05:00",
				   updatedAt:"2015-02-15T15:12:21-05:00"
				},
				{
				   id: 	"006",
				   name:"Titan",
				   title:"Titantagged 1586Sl03 Brown/Brown Analog Watch",
				   rating: "4.5",
				   numberofVote:"134",
				   variants:"Men's WatchesWomen's WatchesTrending WatchesGifts Men's Watches Products Online at Best Price in India - Flipkart.com?",
				   emi: "600",
				   price: "6000",
				   productType:"watch",
				   createdAt:"2013-02-15T15:12:21-05:00",
				   updatedAt:"2016-08-15T15:12:21-05:00"
				},
				{
				   id: 	"007",
				   name:"Sontata Watch",
				   title:"Nexa Black Flip Flops",
				   rating: "2.5",
				   numberofVote:"30",
				   variants:"30 Day Returns. Free Shipping * Huge Selection · 100% Purchase Protection · Cash on Delivery · Low Prices · Easy Returns",
				   emi: "No EMI",
				   price: "10000",
				   productType:"watch",
				   createdAt:"2014-02-15T15:12:21-05:00",
				   updatedAt:"2015-04-15T15:12:21-05:00"
				},
				{
				   id: 	"008",
				   name:"Nickolas shoe",
				   title:"Nickolas Blue Lifestyle Shoes",
				   rating: "4.5",
				   numberofVote:"24",
				   variants:"Attractive EMI Options Available . Easy Returns · Cash on Delivery · Low Prices · 100% Purchase Protection",
				   emi: "1000",
				   price: "10000",
				   productType:"shoe",
				   createdAt:"2015-02-15T15:12:21-05:00",
				   updatedAt:"2016-08-15T15:12:21-05:00"
				}
				
			
	]
	
	this.filtered=[];
	
  }
  
  getProductList()
  {
	  return this.filtered;
  }
  
   searchProducts(searchKey) {   
			this.filtered = this.productList.filter(function (element) {
                 var searchSrc = element.productType +" " + element.variants +" " + element.title +" " + element.name ;
                return searchSrc.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });  
   }
  
  filterByRelevance() {          
            this.filtered = this.filtered.sort(function (element) {
                var filterby = element.productType;
                return filterby.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });          
   }
   
   filterByPopular() {            
           this.filtered = this.filtered.sort(function (element) {
                return element.rating - element.rating;
            });            
   }
  
   filterByLowPrice() {         
            this.filtered = this.filtered.sort(function (element) {
                return element.price <  elemen.price? 1 : 0;               
            });           
   }
   
   filterByHightPrice(searchKey) {           
            this.filtered = this.filtered.sort(function (element) {
                return element.price >  elemen.price? 1 : 0;               
            });                   
   }
   
    filterByNew(searchKey) {          
             this.filtered = this.filtered.sort(function (element) {
                 return element.updatedAt <  elemen.updatedAt? 1 : 0;               
            }); 
   }
  
   handleActions(action) {
		switch(action.type) {
		  case "SEARCH_PRODUCTS": {
			this.searchProducts(action.searchKey);
			this.emit("change");
			break;
		  }
		  case "FILTER_BY_RELEVANTS": {
			this.filterByRelevance();
			this.emit("change");
			break;
		  }
		  case "FILTER_BY_POPULAR": {     
			filterByPopular();
			this.emit("change");
			break;
		  }
		   case "FILTER_BY_LOWPRICE": {
			this.filterByLowPrice(action.warrior)
			this.emit("change");
			break;
		  }
		  case "FILTER_BY_HIGHPRICE": {
			filterByHightPrice()
			this.emit("change");
			break;
		  }
		  case "FILTER_BY_NEW": {
			this.filterByNew()
			this.emit("change");
			break;
		  }
		}
  }

}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));

export default productStore;