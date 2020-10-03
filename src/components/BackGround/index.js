import React from "react";

const BackGround = () => {
    return (
    <section className="section-profile-cover section-shaped my-0">
     
    <img className="bg-image" alt="cover" src="../assets/img/COVER.jpg"  style={{width: "100%"}}/>
   
    <div className="separator separator-bottom separator-skew">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon className="fill-secondary" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>)
}

export default BackGround;