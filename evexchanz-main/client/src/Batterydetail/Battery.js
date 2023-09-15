import React,{useState,useRef,useEffect} from 'react';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import Success from 'components/success/success';
import moment from 'moment';

  
  
const Battery = ({user}) => {

    const [battery,setBattery]=useState({
        battery_id: '',
        brand: '',
        efficiency: '',
        life: '',
    })
    const [view,setView]=useState(false);


    const handleChange=(e)=>{
        const { name, value } = e.target;
        setBattery({...battery,[name]: value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await axios.patch(`https://evexchanz.herokuapp.com/provider/battery/${user.uid}`,battery)
        .then(res=>{
              console.log(res);
        })
        .catch(err=>{
            console.log(err);

        })
        await axios.post(`https://evexchanz.herokuapp.com/battery/`,battery)
        .then(res=>{
            console.log(res);
            setView(true);
        })
        .catch(error=>{
            console.log(error);
            alert("Either there is network Error or the for the given gas station there no such Provider Exist")
        })

        
    }
    useEffect(()=>{

    },[view])


    return ( 
        <>
       { !view&&   <div className='d-flex justify-content-center m-2 '>
        <form className=' w-50 bg-light p-4 formclass rounded'>
            
            <h1 className='text-info mb-4'>&nbsp;<img src="LOGO.png" alt="..." style={{width: '5rem'}}/>&nbsp;Enter your Battery Details</h1>
            <div className="row">
                <div className="form-group col-md-6">
                <label>Battery Id</label>
                <input type="text" className="form-control" name="battery_id"  onChange={handleChange}  placeholder="Battery ID" />
                </div>
                <div className="form-group col-md-6">
                <label>Brand</label>
                <input type="text" className="form-control" name="brand" onChange={handleChange} placeholder="Brand" />
                </div>
            </div>
            <div className="row my-2">
                <div className="form-group col-md-6">
                <label>Battery Percentage</label>
                <input type="text" className="form-control" name="efficiency"  onChange={handleChange}  placeholder="Battery Efficiency" />
                </div>
                <div className="form-group col-md-6">
                <label>Battery Life</label>
                <input type="text" className="form-control" name="life" onChange={handleChange} placeholder="Battery Life" />
                </div>
            </div>
                <button onClick={handleSubmit}  className="btn btn-primary my-4">Submit Detail</button>
            </form>
        </div>}
        { view && <Success redirect="batterydetails" redirectMessage="Go to Battery Dashboard" message="Congratulation battery details are successfully added"/>}
       
        </>
     );
}
 
export default Battery;