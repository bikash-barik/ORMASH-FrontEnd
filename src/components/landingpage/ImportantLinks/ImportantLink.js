import React from "react";
import logo from "../../../assets/images/logo3.png";
import logo1 from "../../../assets/images/logoe1.png";
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
          <p className="d-flex">
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
          </p>

          {/* <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a>
                    <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a>
                    <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a>
                    <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a>
                    <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a>
                    <a href="#" class="home-page-links"> <img src="https://i.gadgets360cdn.com/large/jpg_to_pdf_1591980583835.jpg"
                            style={{height: "8px;" ,paddinglft:"40px"}}/></a> */}
          {/* </p> */}
        </marquee>
        {/* <marquee
                  behavior=''
                  className='mobile-none'
                  direction=''
                  style={{
                    color: 'black',
                    foontSize: '19px',
                    margintop: '-13px',
                  }}
                >
                  Creating Competence and Values in Rural Odisha
                </marquee> */}
      </div>
    </div>
  );
};

export default ImportantLink;
