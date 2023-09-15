              // <div className="mx-4 d-flex justify-content-end ">
              //   <div
              //     class="card"
              //     style={{ maxWidth: "20rem", borderRadius: "10px" }}
              //   >
              //     <div
              //       class="card-body text-light "
              //       style={{
              //         backgroundColor: "rgb(0 123 204)",
              //         borderStartEndRadius: "10px",
              //         borderTopLeftRadius: "10px",
              //       }}
              //     >
              //       <h5 class="card-title">Get In Touch</h5>
              //     </div>
              //     <img src="chatimg.jpeg" class="card-img-top" alt="..." />
              //     <div class="card-body text-start">
              //       <h5 class="card-title">Card title</h5>
              //       <p class="card-text">
              //         Some quick example text to build on the card title and
              //         make up the bulk of the card's content.
              //       </p>
              //       <textarea
              //         className="form-control p-2 w-100"
              //         aria-label="Send a message"
              //         placeholder='Send a message'
              //         value={message.message}
              //         onChange={handleChange}
              //       ></textarea>
              //       <button onClick={sendMessage}className='btn my-2 w-100 text-white' style={{
              //         backgroundColor: "rgb(0 123 204)"
              //       }}>
              //       Send the message

              //       </button>
              //     </div>
              //   </div>
              // </div>


            //   places.nearbySearch(
            //     search,
            //     (
            //       // eslint-disable-next-line no-undef
            //       results: google.maps.places.PlaceResult[] | null,
            //       // eslint-disable-next-line no-undef
            //       status: google.maps.places.PlacesServiceStatus,
            //       // eslint-disable-next-line no-undef
            //       pagination: google.maps.places.PlaceSearchPagination | null
            //     ) => {
            //       if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            //         clearResults();
            //         clearMarkers();
            
            //         // Create a marker for each hotel found, and
            //         // assign a letter of the alphabetic to each marker icon.
            //         for (let i = 0; i < results.length; i++) {
            //           const markerLetter = String.fromCharCode(
            //             "A".charCodeAt(0) + (i % 26)
            //           );
            //           const markerIcon = MARKER_PATH + markerLetter + ".png";
            
            //           // Use marker animation to drop the icons incrementally on the map.
            //           markers[i] = new google.maps.Marker({
            //             position: (results[i].geometry as google.maps.places.PlaceGeometry)
            //               .location,
            //             animation: google.maps.Animation.DROP,
            //             icon: markerIcon,
            //           });
            //           // If the user clicks a hotel marker, show the details of that hotel
            //           // in an info window.
            //           // @ts-ignore TODO refactor to avoid storing on marker
            //           markers[i].placeResult = results[i];
            //           google.maps.event.addListener(markers[i], "click", showInfoWindow);
            //           setTimeout(dropMarker(i), i * 100);
            //           addResult(results[i], i);
            //         }
            //       }
            //     }
            //   );