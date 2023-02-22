import React from "react";
import img from "../../../assets/images/Organogramo/Organogramo.jpg";
import img2 from "../../../assets/images/Organogramo/Organogramo1.jpg";
const Organogram = () => {
  return (
    <div>
      <div class="container p-3">
        <h3>Organogram</h3>
        <div class="border p-3 text-center ">
          <figure class="text-center ">
            <blockquote class="blockquote">
              <h4> Headquarter</h4>
            </blockquote>
          </figure>

          <img src={img} class="img-fluid w-100 " alt="..." />
        </div>

        <div class="border p-3">
          <figure class="text-center">
            <blockquote class="blockquote">
              <h4> District Units of ORMAS</h4>
            </blockquote>
          </figure>

          <img
            src={img2}
            class="img-fluid w-50 "
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Organogram;
