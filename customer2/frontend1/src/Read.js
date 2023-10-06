import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import  axios  from "axios"; 




export default function Read (){


    
    const[values,setValues]=useState({
        name:'',
        lastName:'',
        email:'',
        address:'',
        number:''
    });
    const {id}=useParams();



    useEffect(()=>{
        axios.get(`http://localhost:3001/read/`+id).then(res => setValues(res.data)).catch((err)=>console.log(err))
        },[id])

return(
    <div className="arxa">
    <div className="read-container">
        <h3 className="table-heading">Etrafli</h3>
        <div className="info-container">

     <div className="reac-div">
            <strong>Name: </strong>
            <p>{values.name}</p>
        </div>
        <div className="reac-div">
            <strong>Soyad:</strong>
            <p> {values.lastName}</p>
        </div>
      
        <div className="reac-div">
            <strong>Email: </strong>
            <p>{values.email}</p>
        </div>
        <div className="reac-div">
            <strong>Email: </strong>
            <p>{values.address}</p>
        </div>
        <div className="reac-div">
            <strong>Email: </strong>
            <p>{values.number}</p>
        </div> 
        </div>

       
        <div className="button-1-container">
             <Link to={`/update/${id}`} className=" read-button">Update</Link>
        <Link to={`/`} className=" read-button">Back</Link>
        </div>
       
    </div>
</div>
)

}