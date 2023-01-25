import React from "react";
import { useHistory } from "react-router-dom";

const AddImportantLink = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/ImportantLink");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Important Link</h1>

          <hr />

          <form class="row g-3 mb-5 d-flex justify-content-around">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Link Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="  Link Name"
              />
            </div>

            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
              URL
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="URL"
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

export default AddImportantLink;
