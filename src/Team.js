import React from 'react';
import './Team.css';
import teamMemberImage from './Sajith.JPG';
import advisorImage2 from './Travis.jpeg';
import institutionImage2 from './iu.jpeg';


const Team = () => {
  return (
    <div className="team">
      <h2>Founders</h2>
      <div className="founders">
       <a href="https://www.linkedin.com/in/sajith-alapati-232517191/" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={teamMemberImage} alt="Team Member" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Sajith Alapati</p>
            <p className="designation">Founder</p>
          </div>
        </div></a>
        </div>
      <h2>Advisors</h2>
      <div className="advisors">
      <a href="https://luddy.indiana.edu/contact/profile/?Travis_Brown" target="_blank" rel="noopener noreferrer"><div className="bubble">
          <img src={advisorImage2} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Travis Brown</p>
            <p className="designation"> Executive Director, Shoemaker Innovation Center</p>
          </div>
        </div></a>
      </div>
      <h2>Institutions</h2>
      <div className="institutions">
      <a href="https://luddy.indiana.edu/academics/align/innovation-entrepreneurship/index.html" target="_blank" rel="noopener noreferrer"> <div className="bubble">
        <img src={institutionImage2} alt="Advisor" className="bubble-image" />
          <div className="overlay-text"> 
            <p className="name">Indiana University</p>
          </div>
        </div></a>
      </div>
    </div>
  );
};

export default Team;
