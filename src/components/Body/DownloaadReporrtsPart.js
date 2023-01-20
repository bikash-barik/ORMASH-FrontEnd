import React from "react";

const DownloaadReporrtsPart = () => {
  return (
    <>
    <form action="">
      <div class="">
      <h3 className="magazin-heading"><i class="bi bi-cash design_icon"></i> Publisher Download Report </h3>
        <div className="btn-row">
        </div>
        <div className="magazinName">
        <div className="coupon-data"></div>
        </div>
      </div>

      <div className="white-bg2">
      <div className="row">
                  <div className="col-md-3">
         
          <div class="form-group"  style={{padding:"20px !important;"}}>
            <select name="country" className="input_box">
                    <option>All Magazines</option>
                    <option>1 </option>
                    <option>2 </option>
                    <option>3 </option>
             </select>
        </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
       
          <div className="form-group"  style={{padding:"20px !important;"}}>
            <select name="country" className="input_box">
                    <option>Today </option>
										<option> This Week</option>
										<option>This Month </option>
										<option>Custom Range </option>
             </select>
        </div>
        
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <button type="submit" className="btn-coupon-analytics">
             Generate Reports
            </button>
            </div>
          </div>
  </div>




    </form>
   
  </>
  );
};

export default DownloaadReporrtsPart;
