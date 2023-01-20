import React from "react";

const TutorialsPart = () => {
  return (
    <div className="Tuto-Container">
      <h1 className="heading">Publisher Tutorials</h1>
      <div className="Tutorial-container">
        <div class="card-Tutorial" >
          <div className="card-head">
            <h2 className="card-heading">PDF Specifications</h2>
          </div>
          <div className="card-title">
            <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
            <a href="#"> PDF Specifications </a>
            <hr />
          </div>
        </div>
          <br />
        <div class="card-Tutorial">
          <div className="card-head">
            <h2 className="card-heading">Exporting PDFs</h2>
          </div>
          <div className="card-title">
            <ol>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#"> Tutorial to export PDFS from QuarkExpress</a>
              </li>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  {" "}
                  Tutorial to export an interactive PDF from Adobe InDesign
                </a>
              </li>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  {" "}
                  Tutorial to export a non interactive PDF from Adobe InDesign{" "}
                </a>
              </li>
            </ol>

            <hr />
          </div>
        </div>
      </div>
      <br />
      <div className="Tutorial-container">
        <div class="card-Tutorial">
          <div className="card-head">
            <h2 className="card-heading">Getting Started</h2>
          </div>
          <div className="card-title">
            <ol>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#"> Tutorial to add a new magazine title</a>
              </li>

              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  {" "}
                  Tutorial to add a new issue of the magazine
                  <li>
                    <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                    <a href="#"> Tutorial to view sales report</a>
                  </li>
                </a>
              </li>

              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">Tutorial to view User data </a>
              </li>
            </ol>
            <hr />
          </div>
        </div>
        <br />
        <div class="card-Tutorial">
          <div className="card-head">
            <h2 className="card-heading">Adding Interactivity</h2>
          </div>
          <div className="card-title">
            <ol>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  Tutorial to embed videos using Adobe InDesign CS5 and above
                </a>
              </li>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  {" "}
                  Tutorial to embed videos using Acrobat X Professional
                </a>
              </li>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  {" "}
                  Tutorial to hyperlink an URL in the PDF using Adobe InDesign
                  CS5
                </a>
              </li>
              <li>
                <img src="https://img.icons8.com/material-rounded/18/000000/file--v1.png" />
                <a href="#">
                  Tutorial to hyperlink an URL in the PDF using Adobe X
                  Professional{" "}
                </a>
              </li>
            </ol>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPart;
