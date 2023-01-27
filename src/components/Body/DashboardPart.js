import React, { useState } from "react";

function DashboardPart() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className={`container ${inactive ? "inactive" : ""}`}></div>
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
              {/* Another instance of placeholder content for this other custom
              component. It is intended to mimic what some real-world content
              would look like, and we're using it here to give the component a
              bit of body and size. */}
            </p>
            <a href="#" class="stretched-link">
              {/* Go somewhere */}
            </a>
          </div>
        </div>
      </div>
      {/* <div className="card-container">
      <div class="card item1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPzYo5SXpIqwt8-qjumm56v4KgXRM0DixUlfe90eDzyRLGhqLSuX86UdMs19bjHv1obo&usqp=CAU"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">ORMAS</h5>
        </div>
      </div>
      <div class="card item2">
        <img
          src="https://nationnews.in/wp-content/uploads/2020/04/2020041916581101.jpg"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">ORMAS</h5>
        </div>
      </div>
      <div class="card item3">
        <img
          src="https://static.toiimg.com/thumb/msid-92445267,width-1070,height-580,imgsize-975560,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div class="card-body">
          <h5 class="card-title">ORMAS</h5>
        </div>
      </div>
      </div> */}
    </>
  );
}

export default DashboardPart;
