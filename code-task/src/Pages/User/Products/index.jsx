import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'





function Products() {

  let [getdata,setgetdata]=useState([])


  function getData(){
axios.get("https://northwind.vercel.app/api/products")
.then(res=>setgetdata(res.data))


  }

  useEffect(()=>{

    getData()
  },[])

  return (
  <>

<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="Bootstrap" width="50" height="40"/>
    FoodStore</a>
  </div>
</nav>

<div className="carddiv">
<div  class="row row-cols-1 row-cols-md-4 g-4">
  
  {
   getdata.map((product,index)=>(
 
    
     <div class="col" key={index}>
       <div class="card h-100">
         <img src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" class="card-img-top" alt="..."/>
         <div class="card-body">
           <h5 class="card-title">  Name:{product.name}</h5>
           <h5 class="card-title">Price:{product.unitPrice} $</h5>
           <h5 class="card-title">Stock:{product.unitsInStock} Quantity</h5>
           <h5 class="card-title"> Quantity:{product.quantityPerUnit} </h5>
    
         </div>
       </div>
     </div>
   
     
   ))
  }
  </div>
</div>
  
  </>
  )
}

export default Products