import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";


function Users(){
const[users,setUsers]=useState([]);


useEffect(()=>{
axios.get('http://localhost:3001')
.then(result=>setUsers(result.data))
.catch(err=>console.log(err))
},[])





const handleDelete=(id)=>{
  const confirm =window.confirm('Are you sure?');
  if(confirm){
      axios.delete('http://localhost:3001/deleteUser/'+id)
  .then(res=>{console.log(res)
  window.location.reload() })
  .catch(err=>console.log(err))
  }
}





let content = <div className="container">

<h1 className="table-heading">Müştərilər</h1>
   <table>
          <thead className="thead">
                  <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Email</th>
              <th>Adres</th>
               <th>Əlaqə</th>
                <th>Hərəkətlər</th>
          </tr>  
          </thead>
          <tbody>
            {users.map(user=>{
              return <tr  key={user._id}>
                <td className="td">{user.name}</td>
                <td className="td">{user.lastName}</td>
                <td className="td">{user.email}</td>
                <td className="td">{user.address}</td>
                <td className="td">{user.number}</td>
                <td className="button-container">
                  <Link className='button-l but-1' to={`/read/${user._id}`} >oxu</Link>
                  <Link className='button-l but-2' to={`/update/${user._id}`} >dəyiş</Link>
                  <Link className='button-l but-3' onClick={(e)=>handleDelete(user._id)}>sil</Link>
                </td>
              </tr>
            })}
          </tbody>
    
      </table>
</div>


if(users.length<1){
  content=<p className="empty container">Müştəriniz yoxdur</p>
}






    return(
      <div className="arxa">
            <div className="button-container">
                      <Link to='/create' className="button" >Müştəri əlavə et</Link>
                      <Link to='/createProduct' className="button" > Satış əlavə et</Link>
            <Link to='/products' className="button" > Satışların sıyahısı</Link>
            <Link to='/users/createIstifadeciler' className="button" >İstifadəçi əlavə et</Link>

        </div>
           {content}
           
          
      </div>
    
    )
}

export default Users;