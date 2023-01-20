import React from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/Employee");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Employee Details</h1>

          <hr />

          <div className="border border-2 d-flex bg-light h3  p-2">
            Personal Details
          </div>
          <form class="row g-3 d-flex mb-5 justify-content-between">
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
               Age
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
            <div class="col-md-3">
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
            <div class="col-md-4 mb-5">
              <label for="inputState" class="form-label">
                Address
              </label>
              <input
                type="test"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Address"
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
                Document If
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
            Other Details
          </div>
          <form class="row g-3 d-flex justify-content-between mb-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
               Emp ID
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder=" Emp ID"
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
               Department
              </label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Department"
              />
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
              Designation
              </label>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder=" Designation"
              />
            </div>
            
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
              Date Of Joining
              </label>
              <input
                type="Date"
                class="form-control p-1 "
                id="input"
                placeholder=" Date"
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
              Date Of Retirement
              </label>
              <input
                type="Date"
                class="form-control p-1 "
                id="input"
                placeholder=" Date"
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
              Rejoining Status
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Yes</option>
                <option>No</option>
                <option>Not available</option>
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

export default AddEmployee;
