import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create(){

    const[name,setName]=useState();
    const[lastName,setLastName]=useState();
    const[email,setEmail]=useState();
    const[address,setAddress]=useState();
    const[number,setNumber]=useState();
    const navigate=useNavigate();

function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createUser',{name,lastName, email,address,number})
.then(result=>{console.log(result)
navigate('/')
})
.catch(err=>console.log(err))
}

    return(
        <div className="create-container">
                <form onSubmit={submit}>

<div className="col-3 input-effect"> Ad
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setName(e.target.value)}></input>
            <label>Ad</label>
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">Soyad
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setLastName(e.target.value)}></input>
            <label>Soyad</label>
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">Email
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Email</label>
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">Adres
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setAddress(e.target.value)}></input>
            <label>Adres</label>
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">Elaqe
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setNumber(e.target.value)}></input>
            <label>Elaqe</label>
            <span className="focus-border"></span>
        </div>

        <div className="button-container">
              <button className="create-button">Əlavə enmt</button>

        </div>
 </form>




            </div>
    )
}

export default Create;



