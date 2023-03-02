import { useSelector,useDispatch } from "react-redux";
import "./team.css";
import {
  listOfficerProfileDetails,
} from "../../../Redux/actions/Content Management/officerProfileDetailsActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";

const Team = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [data, setData] = useState([]);

 
  const officerProfileDetailList = useSelector(
    (state) => state.officerProfileDetailList
  );
  const {  officerProfileDetails } = officerProfileDetailList;
  // console.log(officerProfileDetails )
  
  useEffect( ()  => {
    dispatch(listOfficerProfileDetails());
  //   const data = await axios.get("http://localhost:5000/api/officersprofiles/");
  //  setData(data.data)
    // console.log(data.data[0])
  }, [
    dispatch,
   
  ]);

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, #5f2c82, #49a09d)",
      }}
     
    >

      {/* {data.map((e)=>{
  <h1>{e.designation}</h1>
      )} */}

      {/* {data.map((e) => {
        return <h1>{e.designation}</h1>
      })} */}

    
      <div  className="cards_wrapper">
      {officerProfileDetails &&
        officerProfileDetails.reverse().map((officerProfileDetail, i) => (
          <div  key={officerProfileDetail._id}>
            {/* first */}
            <div className="profile_card heightcard">
              <div className="profile_card_img">
                <img src={officerProfileDetail.photo} alt="" />
              </div>
              <div class="profile_card_desc">
                <h1> {officerProfileDetail.officername}</h1>

                <p class=""> {officerProfileDetail.designation}</p>
                {/* <p class="">guha.ormashq@gmail.com</p> */}
              </div>
            </div>

            {/* second */}
            {/* <div className="profile_card">
              <div className="profile_card_img">
                <img src="./assets/members/sushil.jpg" alt="" />
              </div>

              <div class="profile_card_desc">
                <h1>Shri Sushil Kumar Lohani,IAS</h1>

                <p class="">Principal Secretary, PR & DW Dept.</p>
                <p class="">sushil.ormashq@gmail.com</p>
              </div>
            </div> */}

            {/* third */}
            {/* <div className="profile_card">
              <div className="profile_card_img">
                <img src="./assets/members/pradip.jpg" alt="" />
              </div>

              <div class="profile_card_desc">
                <h1>Shri Pradip Kumar Amat</h1>

                <p class="">Hon'ble Minister, PR & DW Dept.</p>
                <p class="">pradip.ormashq@gmail.com</p>
              </div>
            </div> */}
          </div>
        ))}
        </div>
    </section>
  );
};
export default Team;
