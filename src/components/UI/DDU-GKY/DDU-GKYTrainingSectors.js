import React from 'react'
import img from "../../../assets/images/DDU-GKY/leaflet_trade_odia_Page_1_1.jpg";
import img1 from "../../../assets/images/DDU-GKY/1_SECTOR_DDU-GKY.jpg";
import img2 from "../../../assets/images/DDU-GKY/2_FAQ_DDU-GKY.jpg";
import img3 from "../../../assets/images/DDU-GKY/leaflet_trade_odia_Page4.jpg";
import img4 from "../../../assets/images/DDU-GKY/3_MSC_DETAILS.jpg";

function DDUGKYTrainingSectors() {
  return (
    <div>
        <div class="container p-3">
    <h3>
        DDU-GKY Training - Sectors
    </h3>
    <div class="border p-3 text-center">
        <img src={img} class="img-fluid w-100" alt="..."/>
    </div>

    <div class="border p-3 text-center">
        <img src={img1} class="img-fluid w-100" alt="..."/>
    </div>

    <div class="border p-3 text-center">
        <img src={img2} class="img-fluid w-100" alt="..."/>
    </div>
    <div class="border p-3 text-center">
        <img src={img3} class="img-fluid w-100" alt="..."/>
    </div>
   
    <div class="border p-3 text-center">
        <img src={img4} class="img-fluid w-100" alt="..."/>
    </div>
    
</div>
    </div>
  )
}

export default DDUGKYTrainingSectors