import React ,{useState,useEffect} from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

function Update(){
      const {id} =useParams()
      const[name,setName]=useState();
      const[lastName,setLastName]=useState();
      const[email,setEmail]=useState();
      const[address,setAddress]=useState();
      const[number,setNumber]=useState();
      const navigate=useNavigate();

    useEffect(()=>{
        axios('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result)
        setName(result.data.name)
        setLastName(result.data.lastName)
        setEmail(result.data.email)
        setAddress(result.data.address)
        setNumber(result.data.number)
        console.log(result)

       }).catch(err=>console.log(err))
       
        },[id])
        


const submit =(e)=>{    
    e.preventDefault();
    axios.put('http://localhost:3001/updateUser/'+id,{name,lastName, email,address,number})
    .then(result=>{console.log(result)
    navigate('/')
    })
    .catch(err=>console.log(err))
    
}

    return( <div className="read-container">
    
            <form onSubmit={submit}>
        <div className="col-3 input-effect">
        	<input value={name} className="effect-16" type="text"  onChange={(e)=>setName(e.target.value)} />
            <label>Ad</label>
            <span className="focus-border"></span>
            
        </div>
        <div className="col-3 input-effect">
        	<input value={lastName} className="effect-16" type="text" onChange={(e)=>setLastName(e.target.value)}/>
            <label>Soyad</label>
            <span className="focus-border"></span>
        </div>
        <div className="col-3 input-effect">
                    <input value={email} className="effect-16" type="text"   onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Email</label>
                    <span className="focus-border"></span>
                </div>
        <div className="col-3 input-effect">
                    <input value={address} className="effect-16" type="text" onChange={(e)=>setAddress(e.target.value)}/>
                    <label>Adres</label>
                    <span className="focus-border"></span>
                </div>
        <div className="col-3 input-effect">
                    <input value={number} className="effect-16" type="number"  onChange={(e)=>setNumber(e.target.value)}/>
                    <label >Elaqe</label>
                    <span className="focus-border"></span>
                </div>
                <button className="read-button">Dəyişdir</button>
                  </form>                      


        </div>
    )
}

export default Update;