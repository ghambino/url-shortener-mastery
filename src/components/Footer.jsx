import React from "react";
import imgLogo from "../images/logo.svg";
import "./footer.css";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div>
      <div className="foot-describe">
        <h2 className="boost-title">Boost your links today</h2>
        <button className="boost-button">Get Started</button>
      </div>
      <div className="foot-container">
        <div className="foot-image">
          <img src={imgLogo} alt="logo images" style={{color: "white"}}/>
        </div>
        <div className="foot-itemBox">
          <div>
            <h3>Features</h3>
            <div className="inner-foot">
              <span>Link Shortening</span>
              <span>Branded Links</span>
              <span>Analytics</span>
            </div>
          </div>
          <div>
            <h3>Resources</h3>
            <div className="inner-foot">
              <span>Blogs</span>
              <span>Developers</span>
              <span>Support</span>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="inner-foot">
              <span>About</span>
              <span>Our Teams</span>
              <span>Branded Links</span>
              <span>Analytics</span>
            </div>
          </div>
          <div className="social-icons">
            <img src={facebook} alt="icons" width={20} height={20} />
            <img src={twitter} alt="icons" width={20} height={20} />
            <img src={pinterest} alt="icons" width={20} height={20} />
            <img src={instagram} alt="icons" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
