import React from 'react'; // eslint-disable-line no-unused-vars
import '../HomePage/homePage.css';
import car1 from '../images/CarouselImages/Car1.jpg';
import car2 from '../images/CarouselImages/Car2.jpg';
import car3 from '../images/CarouselImages/Car3.jpg';
import car4 from '../images/CarouselImages/Car4.jpg';
import donateFood from '../images/HelpOption/DonateFood.jpg';
import potCollage from '../images/HelpOption/potteryCollage.png';
import biogasPlant from '../images/SocialsImg/BiogasPlant.jpg';
import ethanolPlant from '../images/SocialsImg/ethanol.jpeg';
import fertilizerPlant from '../images/SocialsImg/fertilizerPlant.jpeg';
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
                    <p>👇Donate Food👇</p>
                    <div className="HelpOpt">
                        <img src={donateFood} className='optImg' alt="" />
                        <div className="content">
                            <p>
                                Become morsel contributer becomes a lifeline for someone facing hunger, offering not just sustenance but also hope and dignity.
                            </p>
                            <NavLink to="/donation">
                            <button>Donate Food</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p>👇Shop Now👇</p>
                    <div className="HelpOpt">    
                        <img src={potCollage} className='optImg collage' alt="" />
                        <div className="content">
                            <p>
                                Shop our natural and ecofriendly items from our website and a percent of our selling will be used for the needy peoples. 
                            </p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section id="socials">
            <div className="collaboration">
                <h2>Our Collaborations</h2>
                <p>We are in contact with some plants too whome we send the waste food for other benificiary productions</p>
                <div className="row biogas">
                    <div className="col-lg-4">
                        <img src={biogasPlant} className='colabImg' alt="" />
                    </div>
                    <div className="col-lg-8">
                        <p className='desctiption'>Our collaboration with biogas production plants breathes new life into surplus food. By sending waste food to these facilities, 
                            we support the generation of biogas—a clean and renewable energy source. Through anaerobic digestion, organic waste is transformed 
                            into biogas, reducing greenhouse gas emissions and powering homes and businesses sustainably. Join us in turning waste into energy 
                            and making a positive impact on the environment.</p>
                    </div>
                </div>
                <div className="row ethanol">
                    <div className="col-lg-8">
                        <p className='desctiption'>
                        At our ethanol production partners, waste food finds a new purpose as biofuel. Through advanced fermentation
                        processes, surplus food materials are converted into ethanol—an eco-friendly alternative to traditional fossil fuels. By collaborating 
                        with ethanol production plants, we not only reduce food waste but also contribute to cleaner transportation and a greener future. 
                        Together, let's drive towards sustainability by turning waste into fuel.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src={ethanolPlant} className='colabImg' alt="" />
                    </div>
                </div>    
                <div className="row fertilizer">
                    <div className="col-lg-4">
                        <img src={fertilizerPlant} className='colabImg' alt="" />
                    </div>
                    <div className="col-lg-8">
                        <p className='desctiption'>
                        Our partnership with fertilizer production plants allows us to close the loop on food waste 
                        and promote soil health. By sending surplus food to these facilities, we facilitate the creation of nutrient-rich fertilizers. These 
                        organic fertilizers enrich the soil, enhance crop yields, and support sustainable agricultural practices. Join us in nourishing the earth 
                        and fostering a more sustainable food system by repurposing waste food into valuable fertilizers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default homePage
