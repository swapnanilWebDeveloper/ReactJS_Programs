import React,{useState, useEffect} from 'react'

function GetMethod() {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
   // const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            if(!res.ok){
               throw new Error("network response not ok !!")
            }
            return res.json()
        })
        .then((info) => {
            setData(info);
            setFetching(true);
            console.log(info);
        })
        .catch((err) => {
            console.log("Something went wrong !!!"+err);
        }) 
    },[])

    if(fetching){
            let product = data.products;
            let pro_info = [{}];

            console.log(product);
            console.log(product.length);

            for(let i = 0; i < product.length; i++){
                  if(product[i].category === "laptops"){
                       pro_info.push({
                         brand : product[i].brand,
                         category : product[i].category,
                         title : product[i].title,
                         price : product[i].price,
                         stock : product[i].stock,
                       })
                  }
            }
             
            pro_info.shift();
            console.log(pro_info);
            console.log(pro_info[0]);

           let total = 0 ;
         
            for(var j = 0; j < pro_info.length; j++){
                total = total + Number(pro_info[j].price);
            }

            console.log(total)
            // most expensive laptop...
            let max_product = pro_info[0];
            console.log(max_product);

            for(var i = 0; i < pro_info.length; i++){
                     if(pro_info[i].price > max_product.price){
                            max_product = pro_info[i];
                     } 
            }

            console.log(max_product);
            // least expensive laptop...

            let min_product = pro_info[0];
            console.log(min_product);

            for(i = 0; i < pro_info.length; i++){
                     if(pro_info[i].price < min_product.price){
                            min_product = pro_info[i];
                     } 
            }

            console.log(min_product);
        return (
            <div>
               <h3>Api is here....</h3>
                { 
                    <table>
                      <thead>
                      <tr>
                      <th>brand</th>
                      <th>category</th>
                      <th>title</th>
                      <th>price</th>
                      <th>stock</th>
                      </tr>
                      </thead>
                      <tbody>
                          {
                            pro_info.map((product_data,ind) => (
                                 <tr key={ind}>
                                    <td>{product_data.brand}</td>
                                    <td>{product_data.title}</td>
                                    <td>{product_data.category}</td>
                                    <td>{product_data.price}</td>
                                    <td>{product_data.stock}</td>
                                 </tr> 
                            ))
                          }
                          <tr>total price of all laptops is : {total}</tr>
                         <tr><h3>most expensive product....</h3></tr>
                         <tr>
                          <td>{max_product.brand}</td>
                          <td>{max_product.title}</td>
                          <td>{max_product.category}</td>
                          <td>{max_product.price}</td>
                          <td>{max_product.stock}</td>
                          </tr>

                          <tr><h3>least expensive product....</h3></tr>
                          <tr>
                           <td>{min_product.brand}</td>
                           <td>{min_product.title}</td>
                           <td>{min_product.category}</td>
                           <td>{min_product.price}</td>
                           <td>{min_product.stock}</td>
                           </tr>
                      </tbody>
                    </table>
                }
            </div>
          )
        }
     else{
        return(
            <h3>API is loading... please wait !!!!</h3>
            )
     }
    }

export default GetMethod
