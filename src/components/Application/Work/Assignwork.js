import React from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Work");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Assign Work</h1>

          <hr />

          <form class="row g-3 d-flex mb-5 justify-content-between">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Name Of The Employee
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Rama</option>
                <option>Krishna</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputPassword4" class="form-label">
                Assign Work
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Assign Work"
                required
              />
            </div>

            <div class="col-md-3">
              <label for="inputAddress2" class="form-label ">
                Date Of Assign
              </label>
              <input
                type="date"
                class="form-control p-1"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
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

export default AddEmployee;
