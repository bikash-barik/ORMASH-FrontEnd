import React from "react";

const CoupanPart = () => {
  return (
    <>
      <form action="">
        <div class="">
        <h3 className="magazin-heading"><i class="bi bi-cash design_icon"></i> Free Coupon</h3>
          <div className="btn-row">
           <div className="col-md-8"></div>
           <div className="col-md-4">
           <div className="btn-position">
              <button type="submit" className="btn-coupon-free">
                Add Free Coupon
              </button>
              <button type="submit" className="btn-coupon-free">
                View Analytics
              </button>
            </div>
           </div>
           
          </div>
          <div className="magazinName">
             
              <input type="text" placeholder="Magazine Name" className="maga_name" ></input>
            </div>
          <div className="coupon-data">
            <table className="coupon-table">
              <tr className="coupon-tr">
                <th className="pd-10">Magazine Name</th>
                <th>Code</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Total Coupon</th>
                <th>Action</th>
              </tr>

             
              
              <tr className="coupon-tr">
                <td></td>
                <td></td>
                <td className="coupon_td">No Record</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>

          <div className="btn-row">
           <div className="col-md-8">
           <div className="ShowEntries">
              <p className="Entries">Showing 1 to 1 of 1 entries</p>
            </div>
           </div>
           <div className="col-md-4">
           <div className="btn-tagle">
              <button type="submit" className="btn-Previous">
                Previous
              </button>
              <button type="submit" className="btn-Next">
                Next
              </button>
            </div>
           </div>
           
          </div>
        </div>
      </form>
    </>
  );
};

export default CoupanPart;
