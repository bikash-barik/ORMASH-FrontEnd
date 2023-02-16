import React from "react";
import logo from "../../../assets/images/logo3.png";
import logo1 from "../../../assets/images/logoe1.png";
import logo2 from "../../../assets/images/logo.png";
import logo3 from "../../../assets/images/logoe2.png";
import logo4 from "../../../assets/images/logoe5.png";
import logo5 from "../../../assets/images/logoe6.png";
import logo6 from "../../../assets/images/logoe7.png";
const ImportantLink = () => {
  return (
    <div>
      <div className="bg-gd-color2" >
        <marquee
          behavior="scroll"
          direction="left"
          onmouseover="this.stop();"
          onmouseout="this.start();"
         
        >
          <p className="d-flex justify-content-between">
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo1}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="30px"
                height="80px"
                src={logo2}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo3}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo4}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo5}
              />
            </a>
            <a href="#">
              <img
                className="home-page-links"
                width="20px"
                height="80px"
                src={logo6}
              />
            </a>
            
          </p>

         
        </marquee>
      
      </div>
    </div>
  );
};

export default ImportantLink;
