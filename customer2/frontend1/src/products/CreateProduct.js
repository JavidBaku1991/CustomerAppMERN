import React, {useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import Select from 'react-select'

function CreateProduct(){

    // const[saleId,setSaleId]=useState();
    const[date,setDate]=useState();
    const[totalSale,setTotalSale]=useState();
    const[descriprion,setDescription]=useState();
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

      const handleSelectChange = (event) => {
        setName(event.target.value);
      };

function submit(e){
e.preventDefault();
axios.post('http://localhost:3001/createProduct',{name, date,totalSale,descriprion})
.then(result=>{console.log(result)
navigate('/products')
})
.catch(err=>console.log(err))
}


console.log(data)
    return(
        <div className="create-container">
                <form onSubmit={submit} >

<div className="col-3 input-effect">
        <div className="date-container">
        <label>Customer</label>
        <select value={name} onChange={handleSelectChange}>
                <option value="" >Select an option</option>
                {data.map(item => (
                <option key={item._id} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
 <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">  
            <div className="date-container">
            <label>Add Date </label>
        	<input className="effect-16" type="date" placeholder="" min="2023-08-01" max="2024-12-31"  onChange={(e)=>setDate(e.target.value)}/>    
            </div>
           
        </div>
<div className="col-3 input-effect">
            <div>
                <p>Total Sale</p>        	
                <input  type="number"  placeholder="" className="total-input" onChange={(e)=>setTotalSale(e.target.value)}/>

            </div>
            <span className="focus-border"></span>
        </div>
<div className="col-3 input-effect">Description
        	<input className="effect-16" type="text" placeholder=""  onChange={(e)=>setDescription(e.target.value)}/>
            <label>Elaqe</label>
            <span className="focus-border"></span>
        </div>

             {/* <div class='button-container'>  */}
                                        <button className="create-button">Əlavə et</button>


                </form>




            </div>
    )
}

export default CreateProduct;



