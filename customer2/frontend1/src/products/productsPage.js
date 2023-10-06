import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage(){
    const[products,setProducts]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3001/products')
        .then(result=>setProducts(result.data))
        .catch(err=>console.log(err))
        },[])

        const handleDelete=(id)=>{
          const confirm =window.confirm('Are you sure?');
          if(confirm){
              axios.delete('http://localhost:3001/deleteProduct/'+id)
          .then(res=>{console.log(res)
          window.location.reload() })
          .catch(err=>console.log(err))
          }
        }
        
    let productsContent = <div className="products-container">

    <h1 className="table-heading">Satışlar</h1>
       <table>
              <thead className="thead">
                      <tr>
                  <th>ID</th>
                  <th>Musteri</th>
                  <th>Tarix</th>
                  <th>Mebleg</th>
                   <th>Etrafli</th>
                    <th>Hərəkətlər</th>
              </tr>  
              </thead>
              <tbody>
                {products.map(product=>{
                  return <tr  key={product._id}>
                    <td >{product._id}</td>
                    <td >{product.name}</td>
                    <td >{product.date}</td>
                    <td >{product.totalSale}</td>
                    <td >{product.descriprion}</td>
                    <td className="button-1-container">
                    <Link className='button-l but-3' onClick={(e)=>handleDelete(product._id)}>sil</Link>

                    </td>
                  </tr>
                })}
              </tbody>
        
          </table>
    </div>

if(products.length<1){
    productsContent=<p className="empty container">Mal yoxdur</p>
  }
  
    return(
        <div>
            {productsContent}
        </div>


    )

}

export default ProductsPage;

