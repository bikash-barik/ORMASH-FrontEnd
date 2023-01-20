import React from "react";
import { useHistory } from "react-router-dom";

const AddGlonalLink = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/GlowbalLink");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Global Link</h1>

          <hr />

          
          <form class="row g-3 d-flex justify-content-between mb-5 mt-5">
          <div class="col-md-3">
              <label for="inputState" class="form-label">
                Select Global Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>About Us</option>
                <option>DDU-GKY</option>
                <option>Activities</option>
                <option>Products</option>
                <option>Exhibition</option>
                <option>Tender</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Link Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Link Name"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Sl. No. of Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>

            <div class="col-md-2 mb-3">
              <label for="inputState" class="form-label">
                Link Type
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option> Internal</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Function Name
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Achivements</option>
                <option>ArcNews</option>
                <option>ArcTender</option>
                <option>Content Management</option>
                <option>Feeedback</option>
                <option>Image Gallery</option>
                <option>Important Links</option>
                <option>News</option>
                <option>SiteMap</option>
                <option>Tender</option>
                <option> Video</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Window Status
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Same</option>
                <option> New</option>
              </select>
            </div>
            
          
            <div class="col-md-3">
              <label for="inputState" class="form-label">
              Publish Status
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Active   </option>
                <option> Inactive</option>
            
              </select>
            </div>

            
          </form>

      
          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button onClick={Cancle} type="submit" className="Cancle-btn">
              Cancle
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGlonalLink;
