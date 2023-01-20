import React from 'react'
import { useHistory } from "react-router-dom";



const SubAccountPart = () => {

  const history = useHistory();
  
const CreateUser = () => {
    history.push("/hub/AddNewUser")
}
    return (
        <div>
            <form action="">
          <div class="">
          <h3 className="magazin-heading"><i class="bi bi-people design_icon"></i> Users </h3>
            <div className="btn-row">
             <div className="col-md-8"></div>
             <div className="col-md-4">
             <div className="btn-position">
                <button type="submit" onClick={CreateUser} className="btn-coupon-free">
                  Add Sub Users 
                </button>
              
              </div>
             </div>
             
            </div>
            <div className="magazinName">
               
                <input type="text" placeholder="Name" className="maga_name" ></input>
              </div>
            <div className="coupon-data">
              <table className="coupon-table">
                <tr className="coupon-tr">
                  <th className="pd-10">User Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Access</th>
                  <th>Action</th>
                </tr>
  
               
                
                <tr className="coupon-tr">
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
                <p className="Entries">Showing 0 to 1 of 0 entries</p>
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

        </div>
    )
}

export default SubAccountPart
