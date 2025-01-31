import React from 'react';
import style from './card.css';


function Card({ name, miniDescription, logo }) {
  return (
<div className="card" id="grow">
<h2 className="name">{name}</h2>

  <img src={logo} alt={name} className="logo" />
  <div className="content">
    <p className="miniDescription">{miniDescription}</p>

  </div>
</div>

  );
}

export default Card;
