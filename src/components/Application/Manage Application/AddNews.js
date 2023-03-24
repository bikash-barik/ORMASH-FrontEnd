import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { createNewsUpdatesAction } from "../../../Redux/actions/Manage Application/newsUpdateActions";
const AddNews = () => {
  const [headline, setHeadline] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const [picMessage, setPicMessage] = useState(null);
  const dispatch = useDispatch();

  const newsUpdatesCreate = useSelector((state) => state.documentCreate);
  const { loading, error, newsUpdates } = newsUpdatesCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(newsUpdates);
  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

    // image/jpeg    image/png
    
    if ( pics.type === "application/pdf" || pics.type === "application/msword" || pics.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || pics.type === "image/jpeg" || pics.type === "image/png") {
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
          setUploadDocument(data.url.toString());
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
    setUploadDocument("");
    setExpiryDate("");
    setDescription("");
    setStatus("");

  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createNewsUpdatesAction(
        headline,
        expiryDate,
        uploadDocument,
        description,
        status
      )
    );
    if (
      !headline ||
      !expiryDate ||
      !uploadDocument ||
      !description ||
      !status

    )
      return;

    resetHandler();
    history.push("/hub/Product");
  };

  useEffect(() => {}, []);

  const history = useHistory();

  const Cancel = () => {
    history.push("/hub/Product");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <div class="magazin-container">
          <h1 className="magazin-heading">Add News</h1>

          <hr />
          <form class="row g-3 d-flex justify-content-between">
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
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
               Expiry Date
              </label>
              <input
                type="date"
                class="form-control p-1"
                id="inputAddress"
                placeholder="Tender Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
              Status
              </label>
              <input
                type="boolean"
                class="form-control p-1"
                id="inputAddress"
                placeholder="True or False"
                value={status}
                onChange={(e) =>  setStatus(e.target.value)}
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
                // accept="application/pdf"
                class="form-control p-1"
                aria-label="file example"
                required
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </div>

            <iframe src={uploadDocument} height="50%" width="50vw"></iframe>

            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Description
              </label>

              <textarea name="comment" form="usrform"
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
                Enter text here...
              </textarea>
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

export default AddNews;
