import React, {useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreateIstifadeci(){

    const[username,setUsername]=useState('');
    const[fullname,setFullname]=useState('');
    const[password,setPassword]=useState('');
    const [email, setEmail] = useState('');
    const [isadmin, setIsAdmin] = useState(false);
    const [isactive, setIsActive] = useState(false);
    const navigate=useNavigate();


    const headers = {
        'Content-Type': 'application/json', // Set the Content-Type header to JSON
        // You can add other headers here if needed
      };

    function submit(e){
        e.preventDefault();
        axios.post('http://localhost:3001/users/createIstifadeciler',{username,fullname,email,password,isactive,isadmin},{ headers })
        .then(result=>{console.log(result)
        navigate('/istifadeciler')
        })
        .catch(err=>console.log(err))
        }
        
    return(
        <div className="create-container">
                <form onSubmit={submit} >
        <div className="col-3 input-effect">  
            <div className="date-container">
            <label>Username </label>
        	<input className="effect-16" type="text" placeholder="Adınız"  onChange={(e)=>setUsername(e.target.value)}/>    
            </div>
           
        </div>
        <div className="col-3 input-effect">  
            <div className="date-container">
            <label>FUll name </label>
        	<input className="effect-16" type="text" placeholder="Soyadınız"  onChange={(e)=>setFullname(e.target.value)}/>    
            </div>
           
        </div>
        <div className="col-3 input-effect">  
            <div className="date-container">
            <label>Şifrə</label>
        	<input className="effect-16" type="password" placeholder="Soyadınız"  onChange={(e)=>setPassword(e.target.value)}/>    
            </div>
           
        </div>


<div className="col-3 input-effect">
         <label>Email</label>	<input className="effect-16" type="email" placeholder="email adresiniz"  onChange={(e)=>setEmail(e.target.value)}/>
           
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">
        	  <label>Aktivlik</label>
              <input className="effect-16" type="checkbox"      
              onClick={() => setIsActive((state) => !state)}/>
          
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">
        <label>Admin</label>	
        <input className="effect-16" type="checkbox" 
        onClick={() => setIsAdmin((state) => !state)}/>
            
            <span className="focus-border"></span>
        </div>
                                        
                                        
        <button className="create-button">Əlavə et</button>
                </form>
            </div>
    )
}

export default CreateIstifadeci;



