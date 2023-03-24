import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { createGalleryAction } from "../../../Redux/actions/Manage Application/gallerysActions";

const AddGallery = () => {
  const [headline, setHeadline] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [status, setStatus] = useState(true);
  const [picMessage, setPicMessage] = useState(null);
  const dispatch = useDispatch();

  const galleryCreate = useSelector((state) => state.galleryCreate);
  const { loading, error, gallerys } = galleryCreate;

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
          setPhoto(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  const resetHandler = () => {
    setHeadline("");
    setPhoto("");
    setCategory("");
    setStatus("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createGalleryAction(headline, category, photo, status));
    if (!headline || !category || !photo || !status) return;

    resetHandler();
    history.push("/hub/Gallery");
  };

  useEffect(() => {}, []);

  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Gallery");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Gallery</h1>

          <hr />

          <form class="row g-3 d-flex justify-content-between">
            {/* <div class="col-md-4">
              <label for="inputState" class="form-label">
                Select Category
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>DDU -GKY</option>
                <option>DDU -GKY</option>
                <option>DDU -GKY</option>
              </select>
            </div> */}
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Select Category
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder=" Select Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Headline
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Tender Headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </div>
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
                Upload Document
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Status
              </label>
              <input
                type="text"
                class="form-control p-1"
                id=""
                placeholder="True or False"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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

export default AddGallery;
