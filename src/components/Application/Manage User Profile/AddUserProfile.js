import React from "react";
import { useHistory } from "react-router-dom";

const AddUserProfile = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/UserProfile");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add User Profile</h1>

          <hr />

          <div className="border border-2 d-flex bg-light h3  p-2">
            Personal Details
          </div>
          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
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
            <div class="col-md-2">
              <label for="inputPassword4" class="form-label">
                SL No.
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="SL Number"
                required
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Gender
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputAddress2" class="form-label ">
                DOB
              </label>
              <input
                type="date"
                class="form-control p-1"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>

            <div class="col-md-3 mb-5">
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

          <div className="border border-2 d-flex bg-light h3  p-2">
            Contact Details
          </div>
          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Office Phone/Ext No.
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Office Phone/Ext No."
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                class="form-control "
                id="input"
                placeholder=" Mobile No."
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputState" class="form-label">
                email
              </label>
              <input
                type="email"
                class="form-control p-1"
                id="inputAddress"
                placeholder="example@domain.com"
              />
            </div>
          </form>

          <div className="border border-2 d-flex bg-light h3  p-2">
            Login Details
          </div>
          <form class="row g-3 d-flex justify-content-between mb-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                User ID
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="  User ID"
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control p-1 "
                id="input"
                placeholder=" Password"
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputState" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control p-1 "
                id="input"
                placeholder="Confirm Password"
              />
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Previlage
              </label>
              <div class="form-check ">
                <input
                  class="form-check-input p-1 m-1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Supper Admin
                </label>
              </div>
            </div>
          </form>

          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel   
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUserProfile;
