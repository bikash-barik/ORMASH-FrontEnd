import React from "react";
import { useHistory } from "react-router-dom";

const AddVideo = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/Video");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Video</h1>

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
                placeholder="Tender Headline"
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
              Link Type
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Internal </option>
                <option>External</option>
              </select>
            </div>


            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
              Upload Thumb Image
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="Upload Thumb Image"
                
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
              Upload Video
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="Upload Video"
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
            <button onClick={Cancle} type="submit" className="Cancle-btn">
              Cancle
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddVideo;
