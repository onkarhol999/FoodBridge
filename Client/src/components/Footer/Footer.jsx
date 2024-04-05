import React from 'react'; // eslint-disable-line no-unused-vars
import logo from '../images/FoodBridge.png';
import '../Footer/Footer.css'

function Footer() {
  return (
    <>
      <section className="footer">
            <div className="row">
                <div className="col-lg-4">
                    <img src={logo} className='footerLogo'/>
                    <div className="contactDetails">
                    <p><span>📞</span>4879865489</p>
                    <p><span>✉️</span>foodbridge@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 footercolumns">
                            <h4>How to help</h4>
                            <p>Donation</p>
                            <p>Volunteer</p>
                            <p>Shop required items </p>
                        </div>
                        <div className="col-lg-4 footercolumns">
                            <h4>News</h4>
                            <p>In News</p>
                            <p>public Document</p>
                        </div>
                        <div className="col-lg-4 footercolumns">
                            <h4>About</h4>
                            <p>Aoubt us</p>
                            <p>our Team</p>
                            <p>Jobs </p>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className="copyright">
      &copy; copyright 2024 FoodBridge. All right reserbed
      </section>
    </>
  )
}

export default Footer
