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
  const idsHandler = (id) =>{
   
    ids.push(id);
    console.log("ids name " + ids)
  }

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
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Gallery
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddGallery}
                >
                  Add Gallery
                </button>
              </div>
            </div>
          </div>
      
          <div className="gap-3 d-flex flex-row-reverse">
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
                class="btn btn-secondary p-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <i class="bi bi-volume-mute"></i>
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
              <button type="button" class="btn btn-secondary p-2">
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
              <button type="button" class="btn btn-secondary p-2">
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
              <button type="button" class="btn btn-secondary p-2">
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
              <button type="button" class="btn btn-secondary p-2">
                <i class="bi bi-printer-fill"></i>
              </button>
            </OverlayTrigger>
          </div>
          <div class="text-center coupon-data mobileresponsive">
            <Table
              striped
              bordered
              hover
              responsive
              className="border rounded table-secondary text-center mt-5"
            >
              <thead>
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Headline</th>
                  <th className="p-2"> Photos</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              
              {gallerys &&
                gallerys.reverse().map((gallery, i) => (
                  <tbody className="" key={gallery._id}>
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1"  onClick={(e) => idsHandler(gallery._id)}/>
                  </td>
                  <th className="p-5">1</th>
                  <td className="p-5"> {gallery.headline}</td>
                  <td className="p-5">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src={gallery.photo}
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> {gallery.category}</td>
                  <td className="p-5">{gallery.createdAt.substring(0, 10)}</td>
                  <td className="p-5">{gallery.status == true ? <button type="button" class="btn btn-primary px-5">Set</button> : <button type="button" class="btn btn-outline-primary px-5">Unset</button> }</td>
                  <td className="p-5"> <a
                          href={`/gallerys/${gallery._id}`}
                        >
                          <i class="bi bi-pencil-square"></i>{" "}
                        </a>
                        <a
                          onClick={() =>
                            deleteHandler(gallery._id)
                          }
                        >
                          <i class="bi bi-trash-fill"></i>{" "}
                        </a>
                      </td>
                </tr>
              </tbody>
                ))}
            </Table>
          </div>

          <div className="btn-row">
            <div className="col-md-8">
              <div className="ShowEntries">
                <p className="Entries">Showing 0 to 1 of 10 entries</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                  Back
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
  );
};

export default Gallery;
