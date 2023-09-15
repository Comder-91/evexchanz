import React, { Fragment,useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Media from 'react-media';
import './homepage.css'
import Topbar from 'components/Navbar/Navbar';
import { Obj,flowchart } from './Object';
import axios from 'axios';
import Chat from './Chat';
import {Row,Container,Col} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Homepage = ({currentUser}) => {
    const [view,setView]=React.useState(false);
  
    const [message,setMessage]=React.useState({message: ''});
    const handleChange=(e)=>{
      setMessage({message: e.target.value});
    }
    const [chota, setChota] = useState(true);
    const switchView = () => { setView(!view) };
    const navigate=useNavigate();
    const routechange=()=>{
      navigate('/map');
    }
    


    const showChota = () => {
      if (window.innerWidth > 960) {
        setChota(false);
      } else {
        setChota(true);
      }
      };
    

      useEffect(() => {
        showChota();
      }, []);

    window.addEventListener("resize", showChota);

    return (
      <>
        {/* //Topbar */}
        <Topbar user={currentUser} />
        {chota&&<>


        </>}
        {!chota &&<>
          <div className='d-flex justify-content-center'>
               <div className='banner'>
                <div><img src='location.png' alt=".."/><h4>Locate</h4></div>
                <div><img src='charge.png' alt=".."/><h4>Book</h4></div>
                <div><img src='car.png' alt=".."/><h4>Swap</h4></div>
               </div>
            </div>
            
          <div className="samnevla">
            <div className="absimage my-2">
                  <img src="front.png"  alt=".."/> 

              <div className='samnevalacontent'>
                <div>
                  <h1 className="textsamneka">Get Exchanged<br/> Or Charged</h1><h2>Your Battery</h2>
                  <h5 className="w-50 purpose"> The web-app is to provide EV owner the convenience of locating charging stations on aerial map, exchange the batteries, recommendations on paying charges online!</h5>
                  <button className="btn btn-success btn-lg mt-4" href="/map" >Go to the station</button>
               
               </div>
              
          
              </div>
            </div>
          
            <div>
              <div className='bottom-banner'>

              </div>
            </div>
            

          </div>
          {/* <div className='nichevala'>
            <div className="">Never wait to change</div>
            <div className="circle"><img src='LOGO.png' style={{height: '6rem'}} alt="..."/></div>
            <div className="">Swap the full Battery in seconds</div>

          </div> */}
          

        </>
        

        }
        <div class="revolution ">
          <h3 class="text-center mb-2">Join Us to bring revolution in EV Sector with Batt-Ex</h3>
          <div className="d-flex justify-content-center">
          <button className=" btn btn-success" type="button" onClick={routechange}>Join The Revolution</button>
          </div>
            
        </div>
        {/* //three cards  */}
        
        <div class="farmersay container">
          <h3>Creating Oppurtunity for Everyone</h3>
        <div class="row threecards">
          <div class="col-lg-4 col-md-6 d-flex justify-content-center card1">
            <div className='cards' style={{ width: "18rem" ,textAlign: "left",marginTop: "30px"}}>
              <div class="benifits"  style={{padding: '10px'}} >
                <img src="question.png" alt="far" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>How to charge your EV ?</h5>
                 <p>Connect to the entire Battery Exchange in real time. Find fresh batteries near you. Map GoStation Sites on your route. Everything is here. Riding plans. Cash-free billing.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center card2">
            <div className='cards' style={{ width: "18rem",marginTop: "30px"}}>
              <div class="benifits"  style={{padding: '10px',textAlign: "left"}} >
                <img src="money.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>How long to Charge ?</h5>
                  <p>The wait is over. Refuel in seconds.The fastest, cleanest way to power your ride. Swaps in seconds. Compact and easy to use. Enough energy for days of riding. Charged and ready for you. Just swap and go.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center card3">
            <div className='cards' style={{ width: "18rem",marginTop: "30px" }}>
              <div class="benifits" style={{padding: '10px', textAlign: "left"}} >
                <img src="time.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>How much it will Cost ?</h5>
                <p>EV are Quite reasonable when compares to Vehicles running on petrol/gas. An EV avg cost about 4 cents per kilometer and gasoline cost about 10-20 cents</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div style={{backgroundColor: "#e0e0e0"}}>
          <div className='d-flex my-4'>
            <div style={{ width: "60%",marginLeft: '10rem' }} >
            
                <img src="roadmap.png"  class="w-100"  alt="..." />
            </div>

            <div style={{marginLeft: '10rem'}} >
                <div >
                  <h2 className='text-start' style={{color: "rgb(0 91 202)",marginBottom: '3rem'}}>Delievering <br />the latest technology</h2>
                <h4 className='text-start w-75 fw-light'> We are trying to make EV charging quick and convenient for you. Get access to our growing network of Public EV Charging points across the country on this Charge web app. Relax and enjoy your EV ride  no matter where you are going.</h4>
                <button className='btn btn-success btn-bg d-flex justify-content-center'>Book a slot</button>
                </div>
            </div>
          </div>
        </div>

        <div className='container'>
        {/* Container style={{ marginBottom: '100px', marginTop: '60px', textAlign: 'center' }} */}
        <Row style={{paddingTop: '30px',paddingBottom: '30px'}}>
          <Col sm className=' d-flex justify-content-center' >
            <div  className='bottom' style={{width: '90%'}}>
            <div class=" mx-4">
            {/* <h3>Trust Us With Your Harvest</h3> */}
            {/* <p >Get fair prices for your produce from Urban Reach</p> */}
            </div>
            </div>
        
          </Col>
          <Col sm className=' d-flex justify-content-center'>
            <div className='bottom' style={{width: '95%'}}>
              <div class=" mx-2">
            {/* <h3>Direct From Farms to Your Business</h3> */}
            {/* <p >Get fair prices for your produce from Urban Reach</p> */}
            </div>
            </div>
          </Col>
        </Row>
      </div>
      <Chat/>



       

        <Footer />
      </>
    );
}
 
export default Homepage;

