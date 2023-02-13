import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { createTenderAction } from "../../../Redux/actions/Manage Application/tendersActions";

const AddTender = () => {
  const [tender_no, setTender_no] = useState("");
  const [tender_headline, setTender_headline] = useState("");
  const [document_one, setDocument_one] = useState("");
  const [document_two, setDocument_two] = useState("");
  const [document_three, setDocument_three] = useState("");
  const [closing_date, setClosing_date] = useState("");
  const [closing_time, setClosing_time] = useState("");
  const [opening_date, setOpening_date] = useState("");
  const [opening_time, setopening_time] = useState("");
  const [description, setDescription] = useState("");
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
          setDocument_one(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  //two
  const postDetailstwo = (pics) => {
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
          setDocument_two(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  //three
  const postDetailsthree = (pics) => {
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
          setDocument_three(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image jepg and png File...");
    }
  };

  const resetHandler = () => {
    setTender_no("");
    setTender_headline("");
    setClosing_date("");
    setClosing_time("");
    setOpening_date("");
    setDescription("");
    setDocument_one("");
    setDocument_two("");
    setDocument_three("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createTenderAction(
        tender_no,
        tender_headline,
        closing_date,
        closing_time,
        opening_date,
        opening_time,
        description,
        document_one,
        document_two,
        document_three
      )
    );
    if (
      !tender_no ||
      !tender_headline ||
      !closing_date ||
      !closing_time ||
      !opening_date ||
      !opening_time ||
      !description ||
      !document_one ||
      !document_two ||
      !document_three
    )
      return;

    resetHandler();
    history.push("/hub/Tender");
  };

  useEffect(() => {}, []);

  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Tender");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Tender</h1>

          <hr />

          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Tender No.
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Tender No."
                value={tender_no}
                onChange={(e) => setTender_no(e.target.value)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Tender Headline
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Tender Headline"
                value={tender_headline}
                onChange={(e) => setTender_headline(e.target.value)}
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Closing Date
              </label>
              <input
                type="Date"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Closing Date"
                value={closing_date}
                onChange={(e) => setClosing_date(e.target.value)}
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="inputEmail4" class="form-label">
                Closing Time
              </label>
              <input
                type="time"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Closing Time"
                value={closing_time}
                onChange={(e) => setClosing_time(e.target.value)}
              />
            </div>

            <div class="col-md-3 mb-3">
              <label for="inputEmail4" class="form-label">
                Opening Date
              </label>
              <input
                type="Date"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Opening Date"
                value={opening_date}
                onChange={(e) => setOpening_date(e.target.value)}
              />
            </div>
            <div class="col-md-2 mb-3">
              <label for="inputEmail4" class="form-label">
                Opening Time
              </label>
              <input
                type="time"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Opening Time"
                value={opening_time}
                onChange={(e) => setopening_time(e.target.value)}
              />
            </div>

            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <div class="col-md-2 mb-5">
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
            <div class="col-md-2 mb-5">
              <label for="inputZip" class="form-label">
                Upload Document
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetailstwo(e.target.files[0])}
              />
            </div>
            <div class="col-md-2 mb-5">
              <label for="inputZip" class="form-label">
                Upload Document
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetailsthree(e.target.files[0])}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                Description
              </label>

              <textarea
                name="comment"
                form="usrform"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                Enter text here...
              </textarea>
            </div>
          </form>

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

export default AddTender;
