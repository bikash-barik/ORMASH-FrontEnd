import "./gallery.css";
import { useSelector, useDispatch } from "react-redux";
import { listGallerys } from "../../../Redux/actions/Manage Application/gallerysActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

const Gallery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const galleryList = useSelector((state) => state.galleryList);
  const { gallerys } = galleryList;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSliderInterval, setAutoSliderInterval] = useState(null);

  const handleNext = () => {
    const nextIndex =
      currentImageIndex === gallerys.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(gallerys[nextIndex].photo);
  };

  const handlePrevious = () => {
    const prevIndex =
      currentImageIndex === 0 ? gallerys.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(gallerys[prevIndex].photo);
  };

  const handleAuto = () => {
    if (autoSliderInterval) {
      clearInterval(autoSliderInterval);
      setAutoSliderInterval(null);
    } else {
      const interval = setInterval(handleNext, 1000);
      setAutoSliderInterval(interval);
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      const index = gallerys.findIndex((item) => item.photo === selectedImage);
      setCurrentImageIndex(index);
    }
  }, [modalIsOpen, selectedImage]);

  useEffect(() => {
    if (autoSliderInterval) {
      return () => clearInterval(autoSliderInterval);
    }
  }, [autoSliderInterval]);

  useEffect(() => {
    dispatch(listGallerys());
  }, [dispatch]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="gallery_container">
      <h1 className="text-center mb-8 g-title">Photo Gallery</h1>
      <div className="gallery">
        {gallerys &&
          gallerys
            .reverse()
            .filter((item) => item.status !== true)
            .map((gallery, i) => (
              <div className="gallery_card" key={gallery._id}>
                <img
                  src={gallery.photo}
                  alt=""
                  onClick={() => openModal(gallery.photo)}
                />
              </div>
            ))}
      </div>
      <div className="text-center">
        <button
          className="button px-4 py-1 mt-4"
          style={{ verticalAlign: "middle" }}
        >
          <span> View All </span>
        </button>
      </div>
      

      <Modal isOpen={modalIsOpen} className="modalcontainer" onRequestClose={closeModal}>
        <div className="modal-content">
          <img src={selectedImage} className="modalcontainer"  alt="" />
          <button className="close-btn" onClick={closeModal}><i className="bi bi-x-circle-fill p-3"></i></button>
          <button className="prev-btn" onClick={handlePrevious}><i className="bi bi-arrow-left-circle p-3"></i></button>
          <button className="next-btn" onClick={handleNext}><i className="bi bi-arrow-right-circle p-3"></i></button>
          <button className="auto-btn" onClick={handleAuto}><i className="bi bi-play-circle p-3"></i></button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
