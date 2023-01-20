import React from "react";
import { useHistory } from "react-router-dom";

const AddOfficerProfile = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/OfficerProfileDetails");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Officer Profile</h1>

          <hr />

         
          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Qualification
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Qualification"
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Designation
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Designation"
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Sl. No. of Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                
              </select>
            </div>

            

            <div class="col-md-4 mb-5">
              <label for="inputZip" class="form-label">
                Upload Image
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
              />
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

export default AddOfficerProfile;
