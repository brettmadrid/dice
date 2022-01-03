import React from 'react';
import './Dice.css';

const Dice = ({ val }) => {
  switch (val) {
    case 1:
      return <i className='fas fa-dice-one'></i>;
    case 2:
      return <i className='fas fa-dice-two'></i>;
    case 3:
      return <i className='fas fa-dice-three'></i>;
    case 4:
      return <i className='fas fa-dice-four'></i>;
    case 5:
      return <i className='fas fa-dice-five'></i>;
    case 6:
      return <i className='fas fa-dice-six'></i>;
    default:
      <i className='fas fa-dice-one'></i>;
  }
  return <div>{val}</div>;
};

export default Dice;
