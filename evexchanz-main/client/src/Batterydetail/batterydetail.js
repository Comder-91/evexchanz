import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import axios from 'axios';
const BatteryDetails = ({user}) => {
    const [batteries,setBattery]=useState({});
    const getBattery=async()=>{
        await axios.get(`https://evexchanz.herokuapp.com/provider/${user.uid}`)
        .then(res=>{
            const Data={...res.data[0]};
            const array={...Data.battery};
            setBattery(array);

        })
        .catch(err=>{
            console.log(err);

        })
    }
    useEffect(()=>{
      getBattery();
    },[])

    
    return ( <>
    <Navbar user={user} />
    <div className="m-2">
        <div className="row d-flex justify-content-center">
        {Object.values(batteries).map((battery)=>(
            <div className='col-md-4 col-sm-12 d-flex justify-content-center'>
            <div class="card m-2" style={{width: '18rem'}}>
            <div class="card-body">
              <h5 class="card-title">ID: {battery.battery_id}</h5>
              <p class="card-title">Battery Efficiency: {battery.efficiency}</p>
              <p class="card-title">Battery Life: {battery.life} years</p>
              <div className='d-flex justify-content-between'>
              <button class="btn btn-primary">Update details</button>
              <button class="btn btn-primary">Swapped?</button>
              </div>
              
              
            </div>
          </div>
          </div>
        ))}
        </div>
        </div>
    </> );
}
 
export default BatteryDetails;