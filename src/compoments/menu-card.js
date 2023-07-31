import './menu-card.css';
import React from "react";

export default function MenuCard({menuItem}){
  return <div className='menu-card'>
    <div className='card-header'>
      <h3>{menuItem.name}</h3>
    </div>
    <div className='card-body'>
      <p>{menuItem.shortDescription}</p>
      <img src={menuItem.image} />
      <p>Price: ${menuItem.price.toFixed(2)}</p>
      <p className='toppings'>Toppings: {menuItem.toppings.join(', ')}</p>
    </div>
  </div>
}
