import React from 'react'
import img from "../../../assets/images/DDU Product/0002.jpg";
import img1 from "../../../assets/images/DDU Product/0003.jpg";
import img2 from "../../../assets/images/DDU Product/0004.jpg";
import img3 from "../../../assets/images/DDU Product/0005.jpg";
import img4 from "../../../assets/images/DDU Product/0006.jpg";

function ProductsBrochure() {
  return (
    <div>
      <div class="container p-3">
    <h3>
        ORMAS Products Brochure
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

export default ProductsBrochure