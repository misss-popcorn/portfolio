import React from "react";

import Bio from "./../Bio";
import ProfessionalDetails from "./../ProfessionalDetails";
import Resume from "./../../data/Resume.pdf";

const MainSection = () => {
return (<section className="section bg-secondary">
<div className="container">
  <div className="card card-profile shadow mt--530">
    <div className="px-4">
      <div className="row justify-content-center">
        <div className="col-lg-3 order-lg-2">
          <div className="card-profile-image">
            <button>
              <img  alt="DP" src="../assets/img/DP.jpg" className="rounded-circle"/>
            </button>
          </div>
        </div>
        <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
          <div className="card-profile-actions py-4 mt-lg-0">
            <a className="btn btn-sm btn-info mr-4" href="mailto:urvashi.soni05@gmail.com"><i className="fa fa-envelope" ></i></a>
            <a className="btn btn-sm btn-default float-right" href={Resume} download><span><i className="fa fa-download" aria-hidden="true"></i></span></a>
          </div>
        </div>
        <div className="col-lg-4 order-lg-1">
          
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Urvashi Soni</h3>
        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>Full Stack Engineer</div>
        <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>React Enthusiast</div>
        
      </div>
      <Bio></Bio>
      <ProfessionalDetails></ProfessionalDetails>
      
    </div>
  </div>
</div>
</section>)
};

export default MainSection;