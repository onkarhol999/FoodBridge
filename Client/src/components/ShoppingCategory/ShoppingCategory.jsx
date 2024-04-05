import React from 'react'; //enlist-disable-line no-unused-vars
import './shopCategory.css';
import { NavLink } from 'react-router-dom';

function ShoppingCategory() {
  return (
    <>
    <main>
        <div className="nav-center">
            <ul className="nav nav-tabs">
                <NavLink to="/fashion">
                <li className="nav-item">
                <a className="nav-link shopCat" href="#">Fashion</a>
                </li>
                </NavLink>
                <NavLink to="/edible">    
                    <li className="nav-item">
                        <a className="nav-link shopCat" href="#">Edibles</a>
                    </li>
                </NavLink>
                <NavLink to="/decorative">
                <li className="nav-item">
                <a className="nav-link shopCat" href="#">Decoratives</a>
            </li>
                </NavLink>
                <NavLink to="/earthenPots">
                <li className="nav-item">
                <a className="nav-link shopCat" href="#">Erthan Pots</a>
            </li>
                </NavLink>
          
           
           
            </ul>
        </div>
    </main>
    </>
  )
}

export default ShoppingCategory
