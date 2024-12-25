import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Product() {


  let [getdata1, setgetdata1] = useState([])


  function getData1() {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => setgetdata1(res.data))
  }


  // function deletedata(id) {

  //   axios.delete(`https://northwind.vercel.app/api/products/${id}`)
  //     .then(setgetdata1(getdata1.filter(elem => elem.id !== id)))


  // }


  useEffect(() => {


    getData1()

  }, [])


  return (
    <>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            getdata1.map((product, index) => (
              <tr key={index}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.quantityPerUnit}</td>
                {/* <td>
                  <button onClick={deletedata(product.id)} className='btn btn-danger'>Delete</button>
                  <button className='btn btn-success'>Edit</button></td> */}
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Product