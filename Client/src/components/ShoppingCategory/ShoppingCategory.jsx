import React from 'react'; //enlist-disable-line no-unused-vars
import './shopCategory.css';

function ShoppingCategory() {
  return (
    <>
    <main>
        <div className="nav-center">
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link shopCat" href="#">Fashion</a>
            </li>
            <li className="nav-item">
                <a className="nav-link shopCat" href="#">Edibles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link shopCat" href="#">Decoratives</a>
            </li>
            <li className="nav-item">
                <a className="nav-link shopCat" href="#">Erthan Pots</a>
            </li>
            </ul>
        </div>
    </main>
    </>
  )
}

export default ShoppingCategory
