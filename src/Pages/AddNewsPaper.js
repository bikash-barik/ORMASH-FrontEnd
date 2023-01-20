import React from "react";

const AddNewsPaper = () => {
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h3 className="magazin-heading"><i class="bi bi-house-door design_icon"></i> Add New Magazine</h3>
          <hr />
          <label for="MagazineName">
            <p className="design_das_p">Magazine Name</p>
          </label>
          <input
            type="text"
            placeholder=""
            name="MagazineName"
            id="MagazineName"
            required
          />
           <p className="design_das_p_2">Ex: Harper's Bazaar, Cosmopolitan UK, Hong Kong Tatler, Men's Health India</p>
          <hr />
          
          <label for="PublishingCompany">
            <p className="design_das_p">Publishing Company</p>
          </label>
       
        <div class="form-group">
            <select name="country" className="input_box">
                <option value="australia">Vichayan Publication</option>
             </select>
        </div>
        
           <p className="design_das_p_2">Select the company for which magazine is created</p>
          <hr />
          <label for="MagazineDescription">
            <p className="design_das_p">Magazine Description</p>
          </label>
          <textarea
            id="MagazineDescription"
            name="MagazineDescription"
            rows="4"
            cols="50"
            placeholder=""
          ></textarea>
          <p className="design_das_p_2">"(maximum 2500 characters)This description will be shown to the magazine readers at the time of purchase to learn more about your magazine"</p>
          <hr />
          <label for="PrimaryCategory">
            <p className="design_das_p">Primary Category</p>
          </label>
          <br />
          <div class="form-group">
            <select name="country" className="input_box">
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
             </select>
        </div>
          <p className="design_das_p_2">(If you do not find a suitable category then please email us contact@vaychayan.com)</p>
          <hr />
          <label for="SecondaryCategory">
            <p className="design_das_p">Secondary Category</p>
          </label>
          <br />
          
          <div class="form-group">
            <select name="country" className="input_box">
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
                <option value="australia">Select</option>
             </select>
        </div>
          <p className="design_das_p_2">If you do not find a suitable category then please email us contact@vaychayan.com)</p>
          <hr />
          <label for="AgeRating">
            <p className="design_das_p">Age Rating</p>
          </label><br/>
          <div class="form-group">
            <select name="country" className="input_box">
                <option value="australia">Select AgeRating</option>
                <option value="australia">3 years and above</option>
                <option value="australia">7 years and above</option>
                <option value="australia">10 years and above</option>
                <option value="australia">12 years and above</option>
            
             </select>
        </div>
          {/* <input
            type="number"
            placeholder=""
            name="AgeRating"
            id="AgeRating"
            required
          /> */}
          <p className="design_das_p_2">Publishers are advised to choose an age rating from the list based on the nature of content of the magazine</p>
          <hr />
         
          <label for="WebsiteUrl">
            <p className="design_das_p">Website Url</p>
          </label>
          <input
            type="text"
            placeholder="http://www.example.com"
            name="WebsiteUrl"
            id="WebsiteUrl"
            required
          />
          <p className="design_das_p_2">Please enter your magazine website URL</p>
          <hr />
          <label for="Country">
            <p className="design_das_p">Country/Region Publish From</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                <option value="australia">Choose your Country</option>
                <option value="australia">India</option>
             </select>
        </div>
          <p className="design_das_p_2">(By default we allow publishing your digital magazine through Magzter in all countries. If you want to block your magazine in certain countries then please hold CTRL key and select the countries you want to block your magazine in)</p>
          <hr />
          <label for="Price">
            <p className="design_das_p">Price Per Issue &#x20B9;</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                   
                    <option>Free </option>
										<option>500/-   &#x20B9;</option>
										<option>1000/- &#x20B9;</option>
										<option>1200/- &#x20B9;</option>
             </select>
        </div>
          <p className="design_das_p_2">Entre Price &#x20B9; </p>

          <hr />
          <div className="row">
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Number of issues for 3 months:</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>0 </option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
             </select>
        </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Subscription Price &#x20B9;</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>Free </option>
										<option>500/-   &#x20B9;</option>
										<option>1000/- &#x20B9;</option>
										<option>1200/- &#x20B9;</option>
             </select>
        </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Number of issues for 6 months:</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>0 </option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
             </select>
        </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Subscription Price &#x20B9;</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>Free </option>
										<option>500/-   &#x20B9;</option>
										<option>1000/- &#x20B9;</option>
										<option>1200/- &#x20B9;</option>
             </select>
        </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Number of issues for 12 months:</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>0 </option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
             </select>
        </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
            <label for="Price">
            <p className="design_das_p">Subscription Price &#x20B9;</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
                    <option>Free </option>
										<option>500/-   &#x20B9;</option>
										<option>1000/- &#x20B9;</option>
										<option>1200/- &#x20B9;</option>
             </select>
        </div>
            </div>
          </div>
          <hr />
          <label for="Country">
            <p className="design_das_p">Magazine Frequency</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
            <option value="">Select</option>
					<option>Semi-Weekly</option>
					<option>Weekly</option>
					<option>Fortnightly</option>
             </select>
        </div>
          <hr />
          <label for="Country">
            <p className="design_das_p">Magazine Language</p>
          </label>
          <div class="form-group">
            <select name="country" className="input_box">
            <option value="">Choose your Language</option>
					<option>English</option>
					<option>Oriya</option>
					<option>Hindi</option>
             </select>
        </div>
          <hr />





<br></br>
          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button type="submit" className="Cancle-btn">
              Cancle
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddNewsPaper;
