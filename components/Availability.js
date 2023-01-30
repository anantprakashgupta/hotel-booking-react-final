import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';

export default function App() {
  const [price, setPrice] = useState(500);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(search.from);
  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const selectHotel = (bus) => {
    dispatch({ id: bus.id, type: 'HOTEL_SELECTION' });
    navigate('/CustomerInfo');
  };
  const hotels = [
    {
      id: '214',
      name: 'Kings Resort',
      price: '4000',
      photo: 'https://thumbs.dreamstime.com/b/hotel-10732347.jpg',
      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
      ],
      // photo: ['https://thumbs.dreamstime.com/b/hotel-10732347.jpg'],
    },
    {
      id: '102',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-djvwAmt438WjtUnPusmHgoyowQQbU8NNB1bSrgI&s',
      name: 'Mayfair Hotel',
      price: '3000',
      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
      ],
    },
    {
      id: '786',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvg09NKGLi-21JQBtQfgk_TFnXzMuxjwK7l79962s4bbqYUztps3_uklm91lzUXB-e1XA&usqp=CAU',
      name: 'Crown Towers',
      price: '2000',
      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
      ],
    },
    {
      id: '618',
      photo:
        'https://media.istockphoto.com/id/1344386618/photo/close-up-of-black-luggage-and-surgical-mask.jpg?b=1&s=170667a&w=0&k=20&c=BBc5MGHi_xAgxeDKubQe1BDelmYh2LdldCWeN_MTTeU=',
      name: 'The Grace Hotel',
      price: '1300',
      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
      ],
    },
    {
      id: '188',
      photo:
        'https://media.gettyimages.com/id/1077111606/photo/luxury-five-stars-hotels-lobby.jpg?s=612x612&w=gi&k=20&c=7XD7nX7GdwVlpEe4n0wwHKiq-tOPQTLBFdkrAK3pnfs=',
      name: 'The Lucky Hotel',
      price: '1500',

      seats: [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
      ],
    },
  ];

  return (
    <div className="App">
      <div id="navlist">
        <a href="#">
          Booking<span id="com">.com</span>
        </a>
        <button id="btn">Register</button>
        <button id="btn">Login</button>
        <button id="text_list">List your Property</button>
      </div>

      <div id="navlist2">
        <a href="#">Stays</a>
        <a href="#">Flight</a>
        <a href="#">Flight+Hotel</a>
        <a href="#">Car rentals</a>
        <a href="#">Attractions</a>
        <a href="#">Airport taxis</a>
      </div>

      <input
        id="range"
        type="range"
        min="500"
        max="6000"
        onInput={handleInput}
      />
      <h3 id="filter_prize">Filter Prize</h3>
      <h4>
        Hotel Location<b id="h_name"> {search.from}</b>, In-Time{' '}
        <b id="h_name"> {search.to}</b> and Out-Time{' '}
        <b id="h_name"> {search.date}</b>
      </h4>
      <div>
        {hotels
          .filter((hotel) => {
            return hotel.price > parseInt(price, 10);
          })
          .map((hotel) => {
            return (
              <div>
                <fieldset id="field2">
                  <div class="hotel-avail" onClick={() => selectHotel(hotel)}>
                    <p class="name" id="hname">
                      {hotel.name}
                    </p>

                    <p class="fare">Price:{hotel.price}</p>

                    <img id="photo2" src={hotel.photo} />

                    <br></br>
                    {/* <p class="fare">Person No:{search.guest}</p> */}
                    <button id="booking" onClick={() => selectHotel(hotel)}>
                      Book Now
                    </button>
                  </div>
                </fieldset>
              </div>
            );
          })}
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
