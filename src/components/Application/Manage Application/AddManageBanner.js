import React from "react";
import { useHistory } from "react-router-dom";

const AddManageBanner = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/ManageBanner");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add ManageBanner</h1>

          <hr />
       
          <form class="row g-3 d-flex justify-content-between">
          <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
              Caption
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Caption"
              />
            </div>
            <div class="col-md-5 mb-5">
              <label for="inputZip" class="form-label">
              Upload Image
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="Upload Video"
                required
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

export default AddManageBanner;
