import "./gallery.css";
import { useSelector, useDispatch } from "react-redux";
import { listGallerys } from "../../../Redux/actions/Manage Application/gallerysActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const Gallery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const galleryList = useSelector((state) => state.galleryList);
  const { gallerys } = galleryList;

  useEffect( () => {
    dispatch(listGallerys());
  }, [dispatch]);

  return (
    <div className="gallery_container">
      <h1 className="text-center mb-8 g-title">Photo Gallery</h1>
      <div className="gallery">

      {gallerys &&
        gallerys.reverse().map((gallery, i) => (
          <div className="gallery_card"  key={gallery._id}>
            <img src={gallery.photo} alt="" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="/#" className="btn  mt-8 bg-primary text-white px-4 py-2">
          View All
        </a>
      </div>
    </div>
  );
};
export default Gallery;
