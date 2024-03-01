import React from 'react'

function Laptop(props) {
    const {laptop_title : title , laptop_brand : brand, laptop_base : base, laptop_GST : GST,
                laptop_VAT : VAT, laptop_total_price : total_price} = props;
  return (
    <div>
         <h3>Laptop is here with latest prices...</h3>
         <h3>Name is : {title}</h3>
         <h3>brand is : {brand}</h3>
         <h3>base price is : {base}</h3>
         <h3>GST is : {GST}</h3>
         <h3>VAT is : {VAT}</h3>
         <h3>Total price is : {total_price}</h3>
    </div>
  )
}

export default Laptop
