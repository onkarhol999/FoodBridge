import React from 'react';
import ShoppingCategory from '../ShoppingCategory/ShoppingCategory';
import { NavLink } from 'react-router-dom';
import EarthenPots from '../ShoppingPages/EarthenPots';

function ShoppingMain() {
  return (
    <>
      <ShoppingCategory/>
      <EarthenPots/>
    </>
  )
}

export default ShoppingMain
