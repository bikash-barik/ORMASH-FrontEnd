import React from "react";

const UpdateBankDetailsPart = () => {
  return (
    <div>
      <form action="">
        <div class="UpdateBank-container">
          <h1 className="heading">Bank Details</h1>
          <hr />
          <label for="BankName">
            <b>Bank Name</b>
          </label>
          <br />
          
          <div class="form-group">
            <select name="Bank Ifsc Code" className="input_box">
                <option value="australia">SBI</option>
                <option value="australia">Paytm</option>
                <option value="australia">Axis</option>
                <option value="australia">HDFC</option>
                <option value="australia">Select</option>
             </select>
        </div>

         
          <hr />
          <label for="Account Number">
            <b>Account Number</b>
          </label>
          <br />
          <input
            type="number"
            placeholder="Account Number"
            name="Account Number"
            id="Account Number"
            required
          />
          <hr />
          <label for="AccountName">
            <b>Beneficiary Name / Account Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Beneficiary Name / Account Name"
            name="AccountName"
            id="AccountName"
            required
          />
  <hr />
          <label for="Bank Ifsc Code">
            <b>Bank Ifsc Code</b>
          </label>
          <br />
          
          <input
            type="text"
            placeholder="Bank Ifsc Code"
            name="Bank Ifsc Code"
            id="Bank Ifsc Code"
            required
          />
          <hr />
         
          <label for="BankSwiftCode">
            <b>Bank Swift Code</b>
          </label>
          <br />
          
          <input
            type="text"
            placeholder="Bank Swift Code"
            name="BankSwiftCode"
            id="BankSwiftCode"
            required
          />
          <hr />
          <label for="BankRoutingNumber">
            <b>Bank Routing Number</b>
          </label>
          <br />
          <input
            type="number"
            placeholder="Bank Routing Number"
            name="BankRoutingNumber"
            id="BankRoutingNumber"
            required
          />
        

          {/* <hr />
          <label for="Bank Address Line 1">
            <b>Bank Address Line 1</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Bank Address Line 1"
            name="Bank Address Line 1"
            id="Bank Address Line 1"
            required
          />
          <hr />
          <label for="Bank Address Line2">
            <b>Bank Address Line2</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Bank Address Line2"
            name="Bank Address Line2"
            id="Bank Address Line2"
            required
          />
          <hr />
          <label for="City">
            <b>City</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Entre City Name"
            name="City"
            id="City"
            required
          />
          <hr />
          <label for="State">
            <b>State</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Entre State Name"
            name="State"
            id="State"
            required
          />
          <hr />
          <label for="Country">
            <b>Country</b>
          </label>
          <br />
          <select name="Country" id="Country">
            <option value="opel">Albania</option>
            <option value="volvo">India</option>
            <option value="saab">USA</option>
            <option value="audi">UK</option>
          </select>
          <hr />
          <label for="Postal Code">
            <b>Postal Code</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Postal Code"
            name="Postal Code"
            id="Postal Code"
            required
          /> */}
          <hr />

          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBankDetailsPart;
