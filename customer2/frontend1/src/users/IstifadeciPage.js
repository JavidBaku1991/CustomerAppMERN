import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function IstifadeciPage(){
    const[istifadeciler,setIstifadeci]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3001/istifadeciler')
        .then(result=>setIstifadeci(result.data))
        .catch(err=>console.log(err))
        },[])

        const handleDelete=(id)=>{
          const confirm =window.confirm('Are you sure?');
          if(confirm){
              axios.delete('http://localhost:3001/deleteIstifadeci/'+id)
          .then(res=>{console.log(res)
          window.location.reload() })
          .catch(err=>console.log(err))
          }
        }
        
    let istifadeciContent = <div className="products-container">

    <h1 className="table-heading">Istifadeciler</h1>
       <table>
              <thead className="thead">
                      <tr>
                  <th>Username</th>
                  <th>FullName</th>
                  <th>Password</th>
                   <th>Email</th>
                   <th>IsACtive</th>
                   <th>IsAdmin</th>
                    <th>Hərəkətlər</th>
              </tr>  
              </thead>
              <tbody>
                {istifadeciler.map(istifadeci=>{

                 
                  return <tr  key={istifadeci._id}>
                    <td >{istifadeci.username}</td>
                    <td >{istifadeci.fullname}</td>
                    <td >{istifadeci.password}</td>
                    <td >{istifadeci.email}</td>
                    <td className={istifadeci.isactive ? 'true' : 'false'}>{istifadeci.isactive}</td>
                    <td className={istifadeci.isadmin ? 'true' : 'false'}>{istifadeci.isadmin}</td>
                    <td className="button-1-container">
                    <Link className='button-l but-3' onClick={(e)=>handleDelete(istifadeci._id)}>sil</Link>

                    </td>
                  </tr>
   })}
              </tbody>
        
          </table>
    </div>

if(istifadeciler.length<1){
    istifadeciContent=<p className="empty container">Istifadeci yoxdur</p>
  }
  
    return(
        <div>
            {istifadeciContent}
        </div>


    )

}

export default IstifadeciPage;

