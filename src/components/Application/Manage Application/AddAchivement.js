import React from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const AddAchivement = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Achivement");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Achivement</h1>

          <hr />

          <form class="row g-3 mb-5 d-flex justify-content-between">
      
         
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
              Achivement Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Snippet"
              />
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
              Snippet
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Snippet"
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

export default AddAchivement;
