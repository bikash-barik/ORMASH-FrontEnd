import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import { APIURL } from "../../../Redux/APIURL";
const AddPrimaryLink = ({ dispatch }) => {
  const history = useHistory();
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [primaryLinks, setPrimaryLinks] = useState({
    global_link:"",
    link_name: "",
    sl_no: 0,
    link_type: "",
    function_name: "",
    window_status: "",
    publish_status: ""
  });
  const [errorMsg, setErrorMsg] = useState("");
  const Cancel = () => {
    history.push("/hub/PrimaryLink");
  };
  const {global_link,link_name,link_type,sl_no,function_name,window_status,publish_status} = primaryLinks
  const addPrimaryLink = async (e) => {
    e.preventDefault();
    try {
     if(global_link && link_name && link_type && sl_no && function_name && window_status && publish_status){
       const config = {
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${userInfo.token}`,
         },
       };
        await axios.post(`${APIURL}/api/primarylinks`, primaryLinks, config);
       setPrimaryLinks({
         global_link: "",
         link_name: "",
         sl_no: 0,
         link_type: "",
         function_name: "",
         window_status: "",
         publish_status: ""
       })
       history.push("/hub/PrimaryLink");
       return;
     } else{
      setErrorMsg("Please fill all the fields")
     }
    
    } catch (error) {
      console.log(error)
      const msg = error.response?.data?.message
      setErrorMsg(msg)
    }
  }
  const updatePrimaryLink = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
       await axios.put(`${APIURL}/api/primarylinks/${params.id}`, primaryLinks, config);
      setPrimaryLinks({
        global_link: "",
        link_name: "",
        sl_no: 0,
        link_type: "",
        function_name: "",
        window_status: "",
        publish_status: ""
      });
      history.push("/hub/PrimaryLink");
    } catch (error) {
      console.log(error)
      const msg = error.response?.data?.message
      setErrorMsg(msg)
    }
  }
  const handleChange = event => {

    setPrimaryLinks({
      ...primaryLinks,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    if(params.id){
      axios.get(`${APIURL}/api/primarylinks/${params.id}`, config)
        .then(res => {

          setPrimaryLinks(res.data.primaryLink)
          console.log(primaryLinks)
        })
        .catch(err => {
          console.log(err)
        })
    }
  
  }, [params.id,userInfo.token])
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  }, [errorMsg])

  
  return (
    <>
      <form action="">
        <div class="magazin-container">
          {params.id ? (<h1 className="magazin-heading"> Update Primary Link</h1>) : (<h1 className="magazin-heading">Add Primary Link</h1>)}
          

          <hr />

          {errorMsg && <ErrorMessage variant="danger">{errorMsg}</ErrorMessage>}
          <form class="row g-3 d-flex justify-content-between mb-5 mt-5">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Link Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Link Name"
                name="link_name"
                value={link_name}
                onChange={e => handleChange(e)}
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Sl. No. of Link
              </label>
              <select id="inputState" class="form-select p-1"
              name="sl_no" value={sl_no} onChange={e => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Select Global Link
              </label>
              <select id="inputState" class="form-select p-1"
                name="global_link" value={global_link} onChange={e => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Home</option>
                <option>About Us</option>
                <option>DDU-GKY</option>
                <option>Activities</option>
                <option>product</option>
                <option>exhibition  </option>
                <option>Tender</option>
              </select>
            </div>
            <div class="col-md-2 mb-3">
              <label for="inputState" class="form-label">
                Link Type
              </label>
              <select id="inputState" class="form-select p-1"
                name="link_type" value={link_type} onChange={e => handleChange(e)}>
                <option selected>Choose...</option>
                <option> Internal</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Function Name
              </label>
              
             {/* <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Link Name"
                name="link_name"
                value={function_name} onChange={e => handleChange(e)}
              /> */}
              <select id="inputState" class="form-select p-1" name="function_name" value={function_name} onChange={e => handleChange(e)}>
                <option selected>Choose...</option>
                <option>/</option>
                <option>Activities</option>
                <option>MissionandVision</option>
                <option>Achivements</option>
                <option>Organisation</option>
                <option>Organogram</option>
                <option>ContactDetailsHQDist</option>
                <option>DDUGKYTrainingTrades</option>
                <option>DdugkyPhysicalMilestone</option>
                <option>DDUGKYTrainingSectors</option>
                <option>Product</option>
                <option>ProductsBrochure</option>
                <option>BalasoreProductCatlog</option>
                <option>BalasoreProductCatlog</option>
                <option>ProductMayurbhanjSabai</option>
                <option>ExhibitionCalender</option>
                <option>Reports</option>
                <option>SisirSaras2023</option>
                <option>ArcNews</option>
                <option>ArcTender</option>
                <option>Content Management</option>
                <option>Feeedback</option>
                <option>Image Gallery</option>
                <option>Important Links</option>
                <option>News</option>
                <option>SiteMap</option>
                <option>Tender</option>
                <option> Video</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Window Status
              </label>
              <select id="inputState" class="form-select p-1" name="window_status" value={window_status} onChange={e => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Same</option>
                <option> New</option>
              </select>
            </div>
           
          
            <div class="col-md-2">
              <label for="inputState" class="form-label">
              Publish Status
              </label>
              <select id="inputState" class="form-select p-1" name="publish_status" value={primaryLinks.publish_status} onChange={e => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Active   </option>
                <option> Inactive</option>
            
              </select>
            </div>

          </form>

      
          <div className="btn">
            {params.id ? (<button type="submit" className="Submit-btn" onClick={e => updatePrimaryLink(e)} >
              Update
            </button>) : (<button type="submit" className="Submit-btn" onClick={e => addPrimaryLink(e)}>
              Submit
            </button>)}
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPrimaryLink;
