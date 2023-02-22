import React from 'react'
import img from "../../../assets/images/DDU-GKY/Training Sector/PIA_Trade_Course_Dutration_Page_01.jpg";
import img1 from "../../../assets/images/DDU-GKY/Training Sector/PIA_Trade_Course_Dutration_Page_02.jpg";
import img2 from "../../../assets/images/DDU-GKY/Training Sector/PIA_Trade_Course_Dutration_Page_03.jpg";
import img3 from "../../../assets/images/DDU-GKY/Training Sector/PIA_Trade_Course_Dutration_Page_05.jpg";
import img4 from "../../../assets/images/DDU-GKY/Training Sector/PIA_Trade_Course_Dutration_Page_08.jpg";
function DDUGKYTrainingTrades() {
  return (
    <div>
       <div class="container p-3">
    <h3>
        DDU-GKY-Training Trades
    </h3>
    <div class="border p-3 text-center">
        <img src={img} alt="..."/>
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

export default DDUGKYTrainingTrades