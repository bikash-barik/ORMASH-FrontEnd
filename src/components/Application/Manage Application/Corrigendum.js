import React from "react";
import { useHistory } from "react-router-dom";

const Corrigendum = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/Tender");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Corrigendum</h1>

          <hr />

         
          <form class="row g-3 d-flex justify-content-between">
          
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
              Tender Headline
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Tender Headline"
              />
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
              Tender Number
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Closing Date
              </label>
              <input
                type="Date"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Closing Date"
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="inputEmail4" class="form-label">
                Closing Time
              </label>
              <input
                type="time"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Closing Time"
              />
            </div>

            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Opening Date
              </label>
              <input
                type="Date"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Opening Date"
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="inputEmail4" class="form-label">
                Opening Time
              </label>
              <input
                type="time"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Opening Time"
              />
            </div>
            <div class="col-md-2 mb-5">
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
            <div class="col-md-2 mb-5">
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
            <div class="col-md-2 mb-5">
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
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
              Description
              </label>
             
              <textarea name="comment" form="usrform">Enter text here...</textarea>
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

export default Corrigendum;
