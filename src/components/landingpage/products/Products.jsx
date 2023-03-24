import { useEffect, useState } from "react";
import "./products.css";
import {listnewsUpdates}  from "../../../Redux/actions/Manage Application/newsUpdateActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// const list = [
//   {
//     id: 1,
//     src: "./assets/Products/p4.png",
//   },
//   {
//     id: 2,
//     src: "./assets/Products/p5.png",
//   },
//   {
//     id: 3,
//     src: "./assets/Products/p6.png",
//   },
//   {
//     id: 4,
//     src: "./assets/Products/p7.png",
//   },
//   {
//     id: 5,
//     src: "./assets/Products/p11.png",
//   },
// ];

const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const galleryList = useSelector((state) => state.galleryList);
  const { gallerys } = galleryList;
  const newsUpdatesList = useSelector((state) => state.newsUpdatesList);
  const { newsUpdates } = newsUpdatesList;

  console.log(newsUpdates)
  useEffect(() => {
    dispatch(listnewsUpdates());
  }, [dispatch]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prev = () =>
    currentSlideIndex === 1
      ? setCurrentSlideIndex(newsUpdates.length - 1)
      : setCurrentSlideIndex(currentSlideIndex - 1);

  const next = () =>
    currentSlideIndex === newsUpdates.length - 1
      ? setCurrentSlideIndex(1)
      : setCurrentSlideIndex(currentSlideIndex + 1);

  useEffect(() => {
    const changeSlide = () => {
      if (currentSlideIndex === newsUpdates.length - 1) {
        setCurrentSlideIndex(0);
      } else if (currentSlideIndex === 1) {
        setCurrentSlideIndex(newsUpdates.length - 1);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    };
    const timer = setTimeout(() => {
      changeSlide();
    }, 2000);

    return () => clearTimeout(timer);
  });

  console.log(currentSlideIndex);

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, #5f2c82, #49a09d)",
      }}
    >
      <div class="row">
        <div
          class="col-12 section-intro text-center"
          style={{ marginTop: "20px" }}
        >
          <h2 className="g-title">Our Products</h2>
        </div>
      </div>
      <div class="container-fluid py-8">

      {newsUpdates &&
                  newsUpdates.reverse().filter(item => item.status !== true).map((newsUpdate, i) => (

        // {list.map(
        //   (item, i) =>
            currentSlideIndex === i && (
              <div key={newsUpdate._id} class="slide-container active">
                <div class="slide row">
                  <div class="image col-lg-5">
                    <img src={newsUpdate.uploadDocument} alt="" />
                  </div>
                  <div class="content col-lg-6 p-4">
                    <h3>{newsUpdate.headline}</h3>
                    <p className="my-2">
                    {newsUpdate.description}
                    </p>
                    <button
                      className="button px-4 py-1 mt-4"
                      style={{ verticalAlign: "middle" }}
                    >
                      <span> Know More </span>
                    </button>

                    {/* <a href='/#' class='btn p-1 px-4'>
                      Know More
                    </a> */}
                  </div>
                </div>
              </div>
            )
        ))}
        <button id="prev" onClick={prev}>
          {" "}
          {"<"}{" "}
        </button>
        <button id="next" onClick={next}>
          {" "}
          {">"}{" "}
        </button>
      </div>
    </section>
  );
};
export default Products;
