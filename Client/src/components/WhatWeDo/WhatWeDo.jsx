import React from 'react'; // eslint-disable-line no-unused-vars
import './WhatWeDo.css'; 
import workFlow from '../images/workflow.png';

function WhatWeDo() {
  return (
    <>
      <main>
            <h2>What We Do</h2>
            <div className="HelpContent">
                <h4>Food Distribution</h4>
                <p>One of the cornerstones of our efforts is our food distribution program. We collaborate with local food banks, pantries, and shelters to distribute food to those facing hunger. Through strategic partnerships and efficient logistics, we are able to reach communities
                    in need and provide essential food assistance.</p>
                
                <h4>Community Outreach</h4>
                <p>Education and outreach are integral components of our mission. We engage with community members to raise awareness about hunger and food insecurity, advocate for policy change, and promote sustainable solutions. By fostering a sense of empathy and understanding,
                    we empower individuals to join us in the fight against hunger.</p>
                
                <h4>Collaborative Partnerships</h4>
                <p>
                We recognize that addressing hunger requires a collaborative approach. That&apos;s why we partner with local businesses, schools, churches, and other organizations to maximize our impact. Together, we pool our resources,
                share our expertise, and work towards a common goal of ending hunger in our community.
                </p>

                <h4>Empowering Local Artisans</h4>
                <p>
                In addition to our hunger relief efforts, we are proud to support local artisans and craftsmen in our community.
                Through our online shopping platform, you can discover a curated selection of handmade items and decorations created by talented villagers. From intricately woven textiles to beautifully crafted ceramics, each product tells a story and reflects the rich cultural heritage of our region.
                </p>
                <h4>Sustainable Livelihoods</h4>
                <p>
                By purchasing goods from our online store, you are not only acquiring unique and high-quality products but also
                supporting sustainable livelihoods for villagers. Your patronage directly benefits artisans and their families, providing them with a source of income and economic stability. We believe in the power of fair trade and ethical sourcing to uplift communities and preserve traditional craftsmanship for future generations.
                </p>
                <h4>The flow we work in:</h4>
                <img src={workFlow} alt="" />
            </div>
      </main>
    </>
  )
}

export default WhatWeDo
