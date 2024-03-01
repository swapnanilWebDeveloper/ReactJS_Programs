 import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
         super(props);

         this.state = {
             elements : [],
             DataisLoaded : false,
         };
    }
    componentDidMount(){   
       fetch('https://dummyjson.com/products')
       .then((res) => {
          return res.json();
       })
       .then((data) => {
          console.log(data);
            this.setState({
                elements : data,
                DataisLoaded : true
            })
       })
       .catch((error)=> {
          console.log("Something went wrong!!! "+error);
       });
    }
  render() {
     const { DataisLoaded, elements } = this.state;
     if(!DataisLoaded){
        return (
            <div>
              <h2>Please wait for sometime.....</h2>
            </div>
          )
     }
     else{
          let stock_item = this.state.elements.products;
          let product_arr = new Array();
          let j = 0;
           for(var i = 0 ; i < stock_item.length; i++){
               if(stock_item[i].category === "fragrances"){
                     console.log("title "+stock_item[i].title+" , brand : "+stock_item[i].brand
                         +", category : "+stock_item[i].category);
                    product_arr[j] = {title : stock_item[i].title, brand : stock_item[i].brand,
                                       price : stock_item[i].price, number : (j+1)}
                        j++;
               }
           }
        let total_price = 0;
           for(var l = 0; l < product_arr.length; l++){
                   total_price = total_price + product_arr[l].price;
           }

           let min_product = product_arr[0];
           for(var k = 1; k < product_arr.length; k++){
                 if(product_arr[k].price < min_product.price){
                        min_product = product_arr[k];
                 }
           }
         return (
            <div className="App">
                <h2>Fetch data from an api in react</h2>
                <h2 className="geeks"> only fragrances products</h2>
                <div className="container">
                    {  
                            (product_arr).map((item) => (
                                <div className="item">
                                        <div>
                                        <h4>fragrance number : {item.number}</h4>
                                        <h4>Title : {item.title}</h4>
                                        <h4>price : ${item.price}</h4>
                                        <h4>brand : {item.brand}</h4>
                                        </div>
                                </div>
                            ))
                    }
                    <h3 class="total">Total price of all the perfumes is : ${total_price}</h3>
                    <h3>The lowest price fragrance is : {min_product.title}</h3>
                    <h3>price is : ${min_product.price}</h3>
                    <h3>brand is : {min_product.brand}</h3>
                </div>
            </div>
        );
     }
  }
} 
