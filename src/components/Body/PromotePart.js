import React from "react";

const PromotePart = () => {
  return (
    <>
      <h1 className="heading">Promote</h1>
      <div className="Promote-container">
        <p className="Promote-title">
        <span>    How would you like to promote your magazines digital presence at
          Magzter</span> 
        </p>
        <div class="card">
          <div>
            <h2 className="card-heading">Website</h2>
          </div>
          <hr className="card-div mob-display" />
          <p className="card-title">
           <span>All you need to do is follow these three simple steps to begin
            promoting the presence of your digital magazine on your website.</span>
            <br /> <br />
            <ol>
              <li>1.Download the Standard Template click <a>here</a></li>
              <br />
              <li>
               2. Edit the .psd files files in Adobe Photoshop with your magazine
                name and the cover image of magazine
              </li>
              <br />
              <li>3.Your banner is ready!</li>
            </ol>
          </p>
        </div>
      </div>
    </>
  );
};

export default PromotePart;
