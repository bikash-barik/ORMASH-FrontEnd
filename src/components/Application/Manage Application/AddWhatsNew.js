import React from "react";
import { useHistory } from "react-router-dom";

const AddWhatsNew = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Tender");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add WhatsNew</h1>

          <hr />

          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Headline
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder=" Headline"
              />
            </div>

            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
                Upload Document
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Description
              </label>

              <textarea name="comment" form="usrform">
                Enter text here...
              </textarea>
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

export default AddWhatsNew;
