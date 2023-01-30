import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({
    from: '',
    to: '',
    date: '',
    guest: '',
  });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForHotel = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date || !search.guest) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_HOTEL' });
    navigate('availability');
  };

  return (
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
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

      <div id="photo">
        <img
          src="https://www.linkpicture.com/q/186278537.jpeg"
          alt="Italian Trulli"
        />
      </div>
      <p id="text">Ski the Swiss Alps this winter</p>
      <p id="text2">
        Discover Switzerland's best ski resorts and plan the perfect vacation
      </p>
      <button id="explore">explore the slope</button>
      <div id="searchForm">
        <input
          required
          type="text"
          id="fname"
          name="from"
          placeholder="Enter city Name"
          onChange={updateValue}
        />
        <input
          required
          type="date"
          id="fname"
          name="to"
          placeholder="Sign In"
          onChange={updateValue}
        />
        <input
          required
          type="date"
          id="fname"
          name="date"
          placeholder="Sign out"
          onChange={updateValue}
        />
        <input
          required
          type="number"
          id="fname"
          name="guest"
          placeholder="Enter Guest"
          onChange={updateValue}
        />
        <button id="btn2" onClick={searchForHotel} type="button">
          <span id="srch">Search</span>
        </button>
      </div>
      <div id="footer">
        <input id="f_serch" type="text" placeholder=" Your email" />
        <button id="btn_f">Subscribe</button>
        <br></br>
        <p id="f_p"> Send me a link to get the FREE Booking.com app!</p>
      </div>
    </div>
  );
};
