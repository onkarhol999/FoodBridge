import React from 'react'; //eslint-disable-line no-unused-vars
import './ShoppingMain.css';
import ceramic1 from '../images/ShoppingCategory/Earthen.jpeg';
import ceramic2 from '../images/ShoppingCategory/ceramics2.jpg';
import ShoppingCategory from '../ShoppingCategory/ShoppingCategory';
function Ceramics() {
  return (
    <main>
       
        <ShoppingCategory/>
        <h2>Handmade Earthen Pots</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic1} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 400₹</h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic2} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 600₹</h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic1} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 400₹ </h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic2} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 600₹ </h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic1} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 400₹ </h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card itemcard">
                    <img src={ceramic2} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Decorated Earthen pot for Food storage</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: 600₹ </h6>
                        <p className="card-text">A beautifully handmade earthen pot which can be used for kitchen use as well as a decor item in the house.</p>
                        <button className='buyBtn'>buy it</button>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
  )
}

export default Ceramics
