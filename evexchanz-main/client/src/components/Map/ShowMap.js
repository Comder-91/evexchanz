import React from "react";
import { useMemo, useState, useRef, useEffect, Fragment } from "react";
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from "react-router-dom";
import './style.css'

import {
  GoogleMap,
  Circle,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {directions} from "react-bootstrap-icons"

import Form from "react-bootstrap/Form";

export default function Showmap({ width1, width2, className, pos }) {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [coords, setCoords] = useState({ lat: 28.58, lng: 77.23 });
  const [duration, setDuration] = useState("");
  const originRef = useRef();
  const [flag, setFlag] = useState(false);
  const destinationRef = useRef();
  const [hotels, sethotels] = useState({});

  const Navigate=useNavigate();

  function createMarker(place) {
    //eslint-disable-next-line no-undef
    new google.maps.Marker({
      position: place.geometry.location,
      map: map,
    });
  }

  const search = () => {
    //eslint-disable-next-line no-undef
    const hotelService = new google.maps.places.PlacesService(map);
    const req = {
      radius: 3000,
      location: coords,
      types: ["gas_station"],
    };
    if (map !== null)
      hotelService.nearbySearch(req, (res, status) => {
        console.log(res);
        sethotels(res);
        //eslint-disable-next-line no-undef
        if (status === google.maps.places.PlacesServiceStatus.OK && res) {
          for (let i = 0; i < res.length; i++) {
            createMarker(res[i]);
          }
        }
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        setFlag(true);
      }
    );
  }, [map]);

  useEffect(() => {
    if (flag === true) search();
  }, [coords]);

  async function duriBatao(destination2) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: coords,
      destination: destination2,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    return (<>
     <h1>results.routes[0].legs[0].distance.text  </h1>
    <h1>JSON.stringify(results.routes[0].legs[0].start_location))</h1>
    </>)
  }
  async function dishaDikhao(destination2) {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: coords,
      destination: destination2,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }
  const redirectToClient=(place_id)=>{
     Navigate(`/client/${place_id}`)
  }

  return (
    <div className={className} style={{ height: "100vh" }}>
      <div style={{ width: width1 }}>
        <div className="m-4">
        <h3 className="m-2 bg-success rounded text-light p-2">Prebook your battery to the near point</h3>
         
    {/* getting results of nearby petrol pump */}
    
          {hotels &&
            Object.values(hotels).map((hotel) => (
              <div class="card m-2">
                {/* <img
                  class="img-thumbnail"
                  src={hotel.icon}
                  style={{ height: "4rem", width: "4rem" }}
                  alt="Cardcap"
                /> */}
                <div class="card-body">
                  <h6 class="card-title">{hotel.name}</h6>
                  <p class="card-text">{hotel.vicinity}</p>
                  Available
                  <div className="d-flex justify-content-between">
                  <button
                    onClick={() => dishaDikhao(hotel.geometry.location)}
                    className="btn btn-primary"
                  >
                    See the direction
                  </button>
                  
                  <button className="btn btn-primary" onClick={()=>redirectToClient(hotel.place_id)}>
                    Prebook 
                  </button>

                  </div>
                  
                  
                </div>
              </div>
            ))}
            {
                (hotels==={})&&
                <>
                <Skeleton count={5} /> 
                </>
            }
        </div>
      </div>
      <div
        style={{ right: "0", position: pos, height: "100vh", width: width2 }}
      >
        <GoogleMap
          zoom={14}
          center={coords}
          mapContainerClassName="map-container"
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
        >
          {map !== null && <Marker position={coords} />}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {flag && (
            <>
              <Circle center={coords} radius={1500} options={closeOptions} />
              <Circle center={coords} radius={4500} options={farOptions} />
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
