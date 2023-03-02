import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import { APIURL } from "../../../Redux/APIURL";

import Loading from "../../Loading";
import { createBannerAction } from "../../../Redux/actions/Manage Application/bannersActions";

const AddManageBanner = () => {
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [sl_no, setsl_no] = useState("");
  const [caption, setcaption] = useState("");
  const [banner, setBanner] = useState("");
  const [publish_status, setpublish_status] = useState(true);
  const [picMessage, setPicMessage] = useState(null);
  const dispatch = useDispatch();

  const bannerCreate = useSelector((state) => state.bannerCreate);
  const { loading, error, banners } = bannerCreate;

  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

    // image/jpeg    image/png

    if (
      pics.type === "application/pdf" ||
      pics.type === "application/msword" ||
      pics.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      pics.type === "image/jpeg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "ormaspreset");
      data.append("cloud_name", "oramas");
      fetch("https://api.cloudinary.com/v1_1/oramas/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setBanner(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  const resetHandler = () => {
    setsl_no("");
    setBanner("");
    setcaption("");
    setpublish_status("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBannerAction(sl_no, caption, banner, publish_status));
    if (!sl_no || !caption || !banner || !publish_status) return;

    resetHandler();
    history.push("/hub/ManageBanner");
  };

 

  useEffect(() => {}, []);

  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/ManageBanner");
  };

  //New data

  // const [managebanners, setManageBanners] = useState({
  //   sl_no: 0,
  //   caption: "",
  //   banner: "",
  //   publish_status: false,
  // });
  // const [errorMsg, setErrorMsg] = useState("");


  // const addManageBanner = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (sl_no || caption || banner || publish_status) {
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${userInfo.token}`,
  //         },
  //       };
  //       await axios.post(`${APIURL}/api/banners/create`, managebanners, config);
  //       setManageBanners({
  //         sl_no: 0,
  //         caption: "",
  //         banner: "",
  //         publish_status: false,
  //       });
  //       setBanner({
  //         banner: "",
  //       });
  //       history.push("/hub/ManageBanner");
  //       return;
  //     } else {
  //       setErrorMsg("Please fill all the fields");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     const msg = error.response?.data?.message;
  //     setErrorMsg(msg);
  //   }
  // };

  // const updateManageBanner = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     };
  //     await axios.put(
  //       `${APIURL}/api/banners/${params.id}`,
  //       managebanners,
  //       config
  //     );
  //     setManageBanners({
  //       sl_no: 0,
  //       caption: "",
  //       banner: "",
  //       publish_status: false,
  //     });
  //     setBanner({
  //       banner: "",
  //     });
  //     history.push("/hub/ManageBanner");
  //   } catch (error) {
  //     console.log(error);
  //     const msg = error.response?.data?.message;
  //     setErrorMsg(msg);
  //   }
  // };

  // const handleChange = (event) => {
  //   setManageBanners({
  //     ...banner,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userInfo.token}`,
  //     },
  //   };
  //   if (params.id) {
  //     axios
  //       .get(`${APIURL}/api/banners/${params.id}`, config)
  //       .then((res) => {
  //         setManageBanners(res.data.banner);
  //         console.log(banner);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [params.id, userInfo.token]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setErrorMsg("");
  //   }, 3000);
  // }, [errorMsg]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div class="magazin-container">
          {/* {params.id !== "add" ? ( */}
            {/* <h3 className="fs-15">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Link / Global Link /</span>Update
              ManageBanner
            </h3> */}
          {/* ) : ( */}
            <h3 className="fs-19">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Link / Global Link /</span>Add ManageBanner
            </h3>
          {/* )} */}
          <p className="text-danger d-flex justify-content-end">
            (*) Indicates Mandatory Fields
          </p>
          <hr />
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <form class="row g-3 d-flex justify-content-between">
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label for="inputState" class="form-label">
                  Sl. No. of Link
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  value={sl_no}
                  onChange={(e) => setsl_no(e.target.value)}
                  style={{ border: "solid 1px #000" }}
                  name="sl_no"
                  id="inputState"
                  class="form-select p-1"
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
                <p className="text-danger p-1">(*) </p>
              </div>
            </div>
            <div class="row d-flex p-1">
            <div class="col-md-2">
              <label for="inputEmail4" class="form-label">
                Caption
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Caption"
                value={caption}
                required={true}
                onChange={(e) => setcaption(e.target.value)}
              />
              <p className="text-danger p-1">(*) </p>
            </div>
            </div>
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="row d-flex p-1">
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Upload Image
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetails(e.target.files[0])}
              />
              <p className="text-danger p-1">(*) </p>
            </div>
            </div>
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label for="inputState" class="form-label">
                  Publish Status
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  name="publish_status"
                  id="inputState"
                  class="form-select p-1"
                  style={{ border: "solid 1px #000" }}
                  value={publish_status}
                  onChange={(e) => setpublish_status(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option>Active </option>
                  <option> Inactive</option>
                </select>
                <p className="text-danger p-1">(*) </p>
              </div>
            </div>
          </form>
          {loading && <Loading size={50} />}
          <div className="btn">
            {/* {params.id ? ( */}
              {/* <button
                type="submit"
                className="Submit-btn"
                // onClick={(e) => updateManageBanner(e)}
              >
                Update
              </button> */}
            {/* ) : ( */}
              <button
                type="submit"
                className="Submit-btn"
                // onClick={(e) => submitHandler(e)}
              >
                Submit
              </button>
            {/* )} */}
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddManageBanner;
