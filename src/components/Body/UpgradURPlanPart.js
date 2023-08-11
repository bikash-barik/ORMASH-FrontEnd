import React, { useState } from "react";
import headerLogo from "../../assets/images/header-logo.png";

function UpgradURPlanPart() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className={`container ${inactive ? "inactive" : ""}`}></div>
      <h3>
        <i class="bi bi-geo-alt-fill"></i>
        <span> Applications /</span>...
      </h3>
      <div>
        <div className=" d-flex justify-content-center align-items-center align-item-center mt-15">
          <div className="">
            <a href="/#">
              <img
                src="https://email.uplers.com/blog/wp-content/uploads/2022/07/1-Signatures-blog.gif"
                class="w-25"
                alt=""
                // className='mobile-none'
                // style={{ height: '84px', width: '100%' }}
              />{" "}
            </a>
            <marquee
              behavior=""
              // className='mobile-none'
              direction=""
              // style="color: black; font-family:Brush Script MT; font-size:19px; margin-top: -13px;"
              style={{
                color: "black",
                fontSize: "25px",
                marginTop: "-13px",
                // fontFamily: "Brush Script MT",
              }}
            >
             Upgrad Your Plan and Contact With Admin
            </marquee>
          </div>
        </div>
        <div class="row g-0 bg-light position-relative ">
          {/* <div class="col-md-6 mb-md-0 p-md-4">
            <img
              src="https://cdn.dribbble.com/users/20368/screenshots/4012238/data_scene.gif"
              class="w-100"
              alt="..."
            />
          </div> */}
          <div class="col-md-12 w-50 p-4 ps-md-0 test-center d-flex align-items-center">
            {/* <marquee width="100%" direction="up" height="100px">
              <h5 class="mt-0 h1"> WellCome To ORMAS</h5>
            </marquee> */}
            {/* <img
              src={headerLogo}
              class="w-100"
              alt="..."
            /> */}

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

export default UpgradURPlanPart;
