import React from "react";

import { getSocialMediaHandles } from "../../data";

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      socialMediaHandles: [],
    };
  }

  componentDidMount() {
    const socialMediaHandles = getSocialMediaHandles();
    this.setState({ socialMediaHandles });
  }

  render() {
    return (
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light"
      >
        <div className="container">
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">
            {this.state.socialMediaHandles.map((s) => {
              return (
                <li key={s.uid} className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href={s.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    title={s.helpText}
                  >
                    <i className={s.icon}></i>
                    <span className="nav-link-inner--text d-lg-none">
                      {s.displayName}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
