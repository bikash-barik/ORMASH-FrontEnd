import React from "react";
import { useHistory } from "react-router-dom";
import "./Sliders.min.css";
import PDF from "./ORMAS.pdf#zoom=185"
const Sliders = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/OfficerProfileDetails");
  };
  return (
    <>
      {/* <section class="containerss container-fluid d-flex justify-content-center align-items-center p-5 bgimg">
        <div>
        <marquee width="100%" direction="up" height="90vh">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ibd3yaPWLYECaW7_HrKv-Q8TnBSdYsPLiw&usqp=CAU"
          alt="ormas logo"
        />{" "}
        </marquee>
        </div>
      </section> */}
      <iframe src={`${PDF}#view=fitH`} className="containerss" zoom="#185%" width="100%" height="1000px"></iframe>
      
      {/* <section class="container-fluid d-flex justify-content-evenly align-items-center p-5">
      <div >
        <div class="row g-0 bg-light position-relative ">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img
              src="https://cdn.dribbble.com/users/20368/screenshots/4012238/data_scene.gif"
              class="w-100"
              alt="..."
            />
          </div>
          <div class="col-md-6 p-4 ps-md-0 test-center d-flex align-items-center">
           
              <marquee width="100%" direction="up" height="100px">
              <h5 class="mt-0 h1">    WellCome To ORMAS</h5>
              </marquee>
            
            <p>
             
            </p>
            <a href="#" class="stretched-link">
            </a>
          </div>
        </div>
      </div>
      
      </section> */}
    
    </>
  );
};

export default Sliders;
