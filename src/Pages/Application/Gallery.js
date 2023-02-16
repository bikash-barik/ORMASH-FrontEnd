import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {
  listGallerys,
  deleteGalleryAction,
} from "../../Redux/actions/Manage Application/gallerysActions";

const Gallery = () => {
  const history = useHistory();

  const AddGallery = () => {
    history.push("/hub/AddGallery");
  };
  const dispatch = useDispatch();

  const galleryList = useSelector((state) => state.galleryList);
  const { loading, error, gallerys } = galleryList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const galleryDelete = useSelector((state) => state.galleryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = galleryDelete;

  const galleryCreate = useSelector((state) => state.galleryCreate);
  const { success: successCreate } = galleryCreate;

  const galleryUpdate = useSelector((state) => state.galleryUpdate);
  const { success: successUpdate } = galleryUpdate;

  useEffect(() => {
    dispatch(listGallerys());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  let ids = [];
  const idsHandler = (id) => {
    ids.push(id);
    console.log("ids name " + ids);
  };

  // const deleteHandler = (ids) => {
  //   for (var i = 0; i < ids.length; i++) {
  //     console.log("com" + i)
  //     dispatch(deleteDocumentAction(ids[i].id));
  //     console.log(ids[i].id)
  //   }
  // };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteGalleryAction(id));
    }
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Application / Gallery /</span>View Gallery
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between">
              <button
                type="button"
                onClick={AddGallery}
                style={{ backgroundColor: "#000081", color: "#fff" }}
                class="btn p-2"
              >
                Add
              </button>
              <button type="button" class="btn btn-outline-secondary p-2">
                View
              </button>
            </div>
            <div className="gap-3 d-flex flex-row-reverse d-flex align-items-center">
              {/* <div className="ShowEntries d-flex align-items-center">
                {data.length > 0 ? (
                  <p className="Entries">
                    {" "}
                    All Results:
                    <span className="text-primary">{data.length}</span>{" "}
                  </p>
                ) : (
                  <p className="Entries"> All Results: 0</p>
                )}
              </div> */}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2">UnPublish</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <i class="bi bi-volume-mute-fill"></i>
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2"> Publish</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-megaphone-fill"></i>
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2"> Delete</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2"> Archive</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-archive-fill"></i>
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2"> Print This Page</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-printer-fill"></i>
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="" style={{ backgroundColor: "#fcfae1" }}>
            <div className="border border-2 d-flex p-2">
              <span className="m-1">Select Category	</span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>Mass Marketing Mission </option>
                  <option>MKSP</option>
                  <option>ORMASProduct Brochure</option>
                  <option>Products of ORMAS</option>
                </select>
              </div>
              <button type="button" class="btn btn-success p-1 mx-2">
                Show
              </button>
            </div>
          </div>
          <div class=" coupon-data mobileresponsive">
            <Table
              // striped
              bordered
              hover
              responsive
              className="border rounded "
            >
              <thead>
                <tr style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#000",
                  }}>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Headline</th>
                  <th className="p-2"> Photos</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>

              {gallerys &&
                gallerys.reverse().map((gallery, i) => (
                  <tbody className="" key={gallery._id}>
                    <tr className="" style={{
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "#000",
                  }}>
                      <td className="p-5">
                        <Form.Check
                          aria-label="option 1"
                          onClick={(e) => idsHandler(gallery._id)}
                        />
                      </td>
                      <th className="p-5">{i+1}</th>
                      <td className="p-5"> {gallery.headline}</td>
                      <td className="">
                        {" "}
                        <a href="" className="text-danger">
                          <img src={gallery.photo} height="80px" />{" "}
                        </a>
                      </td>
                      <td className="p-5"> {gallery.category}</td>
                      <td className="p-5">
                        {gallery.createdAt.substring(0, 10)}
                      </td>
                      <td className="p-5 text-center">
                        {gallery.status == true ? (
                          // <button type="button" class="btn btn-primary px-5">
                          " Set"
                          // </button>
                        ) : (
                          // <button
                          //   type="button"
                          //   class="btn btn-outline-primary px-5"
                          // >
                           " Unset"
                          // </button>
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {" "}
                        <a href={`/gallerys/${gallery._id}`}>
                          <i class="bi bi-pencil-square"></i>{" "}
                        </a>
                      </td>{" "}
                      <td className="p-5 text-center">
                        <a onClick={() => deleteHandler(gallery._id)}>
                          <i class="bi bi-trash-fill"></i>{" "}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </Table>
          </div>

          <div className="btn-row">
            <div className="col-md-5 col-12">
              <button type="button" class="btn  btn-outline-secondary p-1 text-dark">
                Set Home
              </button>
              <button type="button" class="btn btn-outline-secondary p-1 m-1 text-dark">
                Unset Home
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Gallery;
