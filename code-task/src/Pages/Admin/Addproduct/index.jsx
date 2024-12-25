import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios'

function Addproducts() {

   

const formik = useFormik({
     initialValues: {
       name: '',
       unitPrice:1,
       unitsInStock:0,
       quantityPerUnit:'',
     },
     onSubmit: values => {

      axios.post("https://northwind.vercel.app/api/products",values)
      .then(res=>console.log(res.data))


      
     },
   });
   return (
    <>
   <div >
   <form className="formdiv" onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="unitPrice"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.unitPrice}
       />
       <label htmlFor="stock">Stock</label>
       <input
         id="stock"
         name="unitsInStock"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.unitsInStock}
       />
       <label htmlFor="quantity">Quantity</label>
       <input
         id="quantity"
         name="quantityPerUnit"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.quantityPerUnit}
       />
 
       <button type="submit">Submit</button>
     </form>
   </div>
     </>
  
   );
 };
   
   
   
   
  
  


export default Addproducts