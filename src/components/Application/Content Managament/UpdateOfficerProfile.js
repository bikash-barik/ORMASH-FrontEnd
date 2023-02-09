import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
// import { login } from "../../../Redux/actions/userActions";
import { createOfficerProfileDetailAction } from "../../../Redux/actions/Content Management/officerProfileDetailsActions";
import {
  deleteOfficerProfileDetailAction,
  updateOfficerProfileDetailAction,
} from "../../../Redux/actions/Content Management/officerProfileDetailsActions";
import axios from "axios";

const UpdateOfficerProfile = ({ match }) => {
  const [officername, setOfficername] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [serial, setSerial] = useState("");
  const [createdon, setCreatedon] = useState("");
  const [photo, setPhoto] = useState("");
  const [picMessage, setPicMessage] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const officerProfileDetailUpdate = useSelector(
    (state) => state.officerProfileDetailUpdate
  );
  const { loading, error } = officerProfileDetailUpdate;

  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
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
          setPhoto(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const resetHandler = () => {
    setOfficername("");
    setQualification("");
    setDesignation("");
    setSerial("");
    setCreatedon("");
    setPhoto("");
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     createOfficerProfileDetailAction(
  //       officername,
  //       designation,
  //       qualification,
  //       serial,
  //       createdon,
  //       photo
  //     )
  //   );
  //   if (
  //     !officername ||
  //     !designation ||
  //     !qualification ||
  //     !serial ||
  //     !createdon ||
  //     !photo
  //   )
  //     return;

  //   resetHandler();
  //   history.push("/hub/OfficerProfileDetails");
  // };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/officersprofiles/${match.params.id}`);
      setOfficername(data.officername);
      setQualification(data.qualification);
      setDesignation(data.designation);
      setSerial(data.serial);
      setCreatedon(data.createdon);
      setPhoto(data.photo);
    };
    fetching();
  }, [match.params.id, photo]);

  // useEffect(() => {}, []);
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateOfficerProfileDetailAction(
        match.params.id,
        officername,
        designation,
        qualification,
        serial,
        createdon,
        photo
      )
    );
    if (
      !officername ||
      !designation ||
      !qualification ||
      !serial ||
      !createdon ||
      !photo
    )
      return;

    resetHandler();
    history.push("/hub/OfficerProfileDetails");
  };

  const Cancel = () => {
    history.push("/hub/OfficerProfileDetails");
  };
  return (
    <>
      <form onSubmit={updateHandler}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Officer Profile</h1>

          <hr />

          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Full Name"
                value={officername}
                onChange={(e) => setOfficername(e.target.value)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Qualification
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Designation
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="inputEmail4" class="form-label">
                Sl. No. of Link
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Designation"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />
            </div>

            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="col-md-4 mb-5">
              <label for="inputZip" class="form-label">
                Upload Image
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </div>
            <div class="col-md-4 mb-5">
              <label for="inputZip" class="form-label">
                Creation Date
              </label>
              <input
                type="date"
                class="form-control p-1"
                aria-label="file example"
                required
                value={createdon}
                onChange={(e) => setCreatedon(e.target.value)}
              />
            </div>
          </form>
          {loading && <Loading size={50} />}
          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateOfficerProfile;
