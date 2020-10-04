import React from "react";

import {getSocialMediaHandles} from "../../data";

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      socialMediaHandles:[]
    };
    console.log("okk");
  }

  componentDidMount ()  {
    const socialMediaHandles = getSocialMediaHandles();
    this.setState({socialMediaHandles});
  }
    
  render() {
    return (<nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
      <div className="container">
          
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                 
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
            
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">
            {this.state.socialMediaHandles.map((s) => {
              return (<li key={s.uid} className="nav-item">
                <a className="nav-link nav-link-icon" href={s.link} rel="noopener noreferrer" target="_blank" data-toggle="tooltip" title={s.helpText}>
                  <i className={s.icon}></i>
                  <span className="nav-link-inner--text d-lg-none">{s.displayName}</span>
                </a>
              </li>);
            })}
                
                  
              
          </ul>
        </div>
      </div>
    </nav>);
  }
}

export default NavBar;