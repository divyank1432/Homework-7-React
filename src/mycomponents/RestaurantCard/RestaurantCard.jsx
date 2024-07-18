import React from 'react'
import './RestaurantCard.css'
import { FaRegStar } from "react-icons/fa";

function RestaurantCard({ URL, name, address, addressLine2, outcode, postcode, rating, typeOfFood }) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaRegStar key={i} />);
  }

  return (
    <div className='card'>
      <div className='image-container'>
        <img src='https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1675233652.jpg?fit=around|562.5:360&crop=562.5:360;*,*' alt='Restaurant' />
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p className='type'>{typeOfFood}</p>
        <p>{address}, {addressLine2}</p>
        <p>{outcode} {postcode}</p>
        <div className='rating'>Rating: {stars}</div>
        <a href={URL} target="_blank" rel="noopener noreferrer">Visit Restaurant</a>
      </div>
    </div>
  )
}

export default RestaurantCard