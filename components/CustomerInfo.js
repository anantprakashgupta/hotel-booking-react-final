import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function () {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <div id="navlist">
        <a href="#">
          Booking<span id="com">.com</span>
        </a>
        <button id="btn">Register</button>
        <button id="btn">Login</button>
        <button id="text_list">List your Property</button>
      </div>

      <div id="navlist2">
        <a href="#">stays</a>
        <a href="#">flight</a>
        <a href="#">Flight+Hotel</a>
        <a href="#">Car rentals</a>
        <a href="#">Attractions</a>
        <a href="#">Airport taxis</a>
      </div>
      <fieldset id="field3">
        <legend id="legend2">Booking confirm</legend>
        <h5> Date {search.date}</h5>
        <h5>
          {' '}
          Hotel Location- <b id="h_name">{search.from}</b>
        </h5>
        <h5>
          {' '}
          Hotel Name- <b id="h_name">Kings Resort</b>
        </h5>
        <h5>
          {' '}
          Rs.- <b id="h_name">2000</b>
        </h5>
        <div id="inline1">
          <h4> In Time {search.date}</h4>
          <h4> Out Time {search.to}</h4>
        </div>
        <p id="fare">Number of Person: {search.guest}</p>
      </fieldset>
      <div id="thank">
        <b>THANK YOU</b>
      </div>
      <div id="footer">
        <input id="f_serch" type="text" placeholder=" Your email" />
        <button id="btn_f">Subscribe</button>
        <br></br>
        <p id="f_p"> Send me a link to get the FREE Booking.com app!</p>
      </div>
    </div>
  );
}

// export default Selection = () => {
//   const details = useSelector((state) => state.details);
//   const buses = useSelector((state) => state.buses);
//   const selectedBus =
//    buses.find((bus) => bus.id === details.selectedBusId) || {};
//   return (
//     <div>
//       <h4> The selected Hotel name is {selectedBus.name}</h4>
//     </div>
//   );
// };

//

// const selectBus = (bus) => {
//   dispatch({ id: bus.id, type: 'HOTEL_SELECTION' });
//   navigate('/selection');
// };
