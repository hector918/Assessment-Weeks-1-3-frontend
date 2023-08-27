import './menu-card.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuCard({menuItem}){
  const navigation = useNavigate();
  //////////////////////////////////////////////
  const onCardClick = (evt) => {
    navigation(`/item/${menuItem.id}`);
  }
  //////////////////////////////////////////////
  return <div className='menu-card' onClick={onCardClick}>
    <div className='card-header'>
      <h3>{menuItem.name}</h3>
    </div>
    <div className='card-body'>
      <p>{menuItem.shortDescription}</p>
      <img src={menuItem.image} alt={menuItem.name}/>
      <p>Price: ${menuItem.price.toFixed(2)}</p>
      {menuItem.toppings.length === 0 
        ?<p>No Topping</p>
        :<p className='toppings'>Toppings: {menuItem.toppings.join(', ')}</p>
      }
      
    </div>
  </div>
}
