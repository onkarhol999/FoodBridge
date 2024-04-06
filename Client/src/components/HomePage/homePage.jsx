import React from 'react'; // eslint-disable-line no-unused-vars
import '../HomePage/homePage.css';
import car1 from '../images/CarouselImages/Car1.jpg';
import car2 from '../images/CarouselImages/Car2.jpg';
import car3 from '../images/CarouselImages/Car3.jpg';
import car4 from '../images/CarouselImages/Car4.jpg';
import wflow from '../images/workflow.png';
import { NavLink } from 'react-router-dom';

function homePage() {
  return (
    <>
      <section id="landing">
            <h2 className='quote'>
            &quot;The <span>food</span> you donate today will put <span>smile</span> on someone&apos;s face <span>tomorrow</span>&quot;
            </h2>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={car1} className="d-block "/>
                    </div>
                    <div className="carousel-item">
                    <img src={car2} className="d-block"/>
                    </div>
                    <div className="carousel-item">
                    <img src={car3} className="d-block"/>
                    </div>
                    <div className="carousel-item">
                    <img src={car4} className="d-block"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon carouselBtn" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon carouselBtn" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>

     
        <section id="Help">
            <h2>Ways To Help</h2>
            <h3>“Together, we can make a difference in the lives of individuals and families facing food insecurity, one donation at a time.”</h3>
            <div className="row">
                <div className="col-lg-6">
                    <NavLink to="/donation">
                    <button>Donate Food</button>
                    </NavLink>
                </div>
                <div className="col-lg-6">
                    <NavLink to="/ShopCategory">
                    <button>Shop Now</button>
                    </NavLink>
                </div>
            </div>
        </section>
       
        <section className="workflow">
            <h2>The flow we follow</h2>
            <img src={wflow} alt="" />
        </section>
    </>
  )
}

export default homePage
