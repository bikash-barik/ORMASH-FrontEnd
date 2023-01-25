import React from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const AddContent = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/OfficerProfileDetails");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Officer Profile</h1>

          <hr />

          <form class="row g-3 mb-5 d-flex justify-content-between">
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Global Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option selected>Choose...</option>
                <option>About Us</option>
                <option>DDU-GKY</option>
                <option>Activities</option>
                <option>Products</option>
                <option>Exhibition</option>
                <option>Tender</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Select Primary Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
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
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Full Name"
              />
            </div>
          </form>
          <Editor
          responsive
            placeholder="Enter your text here:"
            editorStyle={{ border: "10px solid #C0C0C0" ,height: "56.5vh"}}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
             // editorState={editorState}
            // onEditorStateChange={this.onEditorStateChange}
            wrapperStyle={{
              width: "100%",
              height: "60vh",
              border: "3px solid black",
            }}
          />

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

export default AddContent;
