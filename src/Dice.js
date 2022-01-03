import React from 'react';
import './Dice.css';

const Dice = ({ val, rolling }) => {
  switch (val) {
    case 1:
      return (
        <i className={`Die fas fa-dice-one ${rolling ? 'shaking' : ''}`}></i>
      );
    case 2:
      return (
        <i className={`Die fas fa-dice-two ${rolling ? 'shaking' : ''}`}></i>
      );
    case 3:
      return (
        <i className={`Die fas fa-dice-three ${rolling ? 'shaking' : ''}`}></i>
      );
    case 4:
      return (
        <i className={`Die fas fa-dice-four ${rolling ? 'shaking' : ''}`}></i>
      );
    case 5:
      return (
        <i className={`Die fas fa-dice-five ${rolling ? 'shaking' : ''}`}></i>
      );
    case 6:
      return (
        <i className={`Die fas fa-dice-six ${rolling ? 'shaking' : ''}`}></i>
      );
    default:
      <i className='Die fas fa-dice-one'></i>;
  }
};

export default Dice;
