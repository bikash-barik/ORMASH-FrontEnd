import React, {useState} from "react";
import "../../AllCss.css";

function DashboardPart() {
    const [inactive, setInactive] = useState(false);
  return (
    <>
    
    <div className={`container ${inactive ? "inactive" : ""}`}></div>
    <div className="card-container">
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
      </div>
    </>
  );
}

export default DashboardPart;
