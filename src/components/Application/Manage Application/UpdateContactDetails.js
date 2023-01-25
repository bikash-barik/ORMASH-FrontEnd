import React from "react";
import { useHistory } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const UpdateContactDetails = ({ dispatch }) => {
  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Feedback");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">UpdateContactDetails</h1>

          <hr />
          <Editor
          responsive
            placeholder="Enter your text here:"
            editorStyle={{ border: "10px solid #C0C0C0" ,height: "55.5vh"}}
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

          <div className="btn mt-5">
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

export default UpdateContactDetails;
