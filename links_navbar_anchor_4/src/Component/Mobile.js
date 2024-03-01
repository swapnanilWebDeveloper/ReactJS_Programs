import React from 'react'

function Mobile(props) {
    const {mob_title : title, mob_brand : brand, mob_base : base, mob_disc_percentage : discount, mob_netPrice : netPrice} = props;
  return (
    <div>
        <h3>Mobile page is for mobiles....</h3>
        <h3>Title is : {title}</h3>
        <h3>Brand is : {brand}</h3>
        <h3>base price is : {base}</h3>
        <h3>discount percentage is : {discount}%</h3>
        <h3>net price is : Rs. {netPrice} /-</h3>
    </div>
  )
}

export default Mobile
