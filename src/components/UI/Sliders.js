import React from "react";
import { useHistory } from "react-router-dom";
import "./Sliders.min.css"
const Sliders = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/OfficerProfileDetails");
  };
  return (
    <>
     <section class="containerss">
      <div class="card">
        <div class="image">
          <img src="http://127.0.0.1:5555/images/sushil.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
      </div>
      <div class="card">
        <div class="image">
          <img src="http://127.0.0.1:5555/images/sushil.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
      </div>
      <div class="card">
        <div class="image">
          <img src="http://127.0.0.1:5555/images/sushil.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
      </div>
      <div class="card">
        <div class="image">
          <img src="http://127.0.0.1:5555/images/sushil.jpg" alt="" />
        </div>
        <h2>Someone Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
      </div>
    </section>
    </>
  );
};

export default Sliders;
