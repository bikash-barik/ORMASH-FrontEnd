import Hero from "../../components/landingpage/hero/Hero";
import Header from "../../components/landingpage/home/Header";
import LogoSection from "../../components/landingpage/logosection/LogoSection";
import Navbar from "../../components/landingpage/navbar/Navbar";
import Notification from "../../components/landingpage/Notification";
import Team from "../../components/landingpage/teams/Team";
import About from "../../components/landingpage/about/About";
import Gallery from "../../components/landingpage/gallery/Gallery";
import VideoGallery from "../../components/landingpage/videogallery/VideoGallery";
import Products from "../../components/landingpage/products/Products";
import Footer from "../../components/landingpage/footer/Footer";
import ImportantLink from "../../components/landingpage/ImportantLinks/ImportantLink";
import Slider from "../../components/landingpage/hero/Slider";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Copyright from "../../components/landingpage/footer/Copyright";
import { useEffect } from "react";
const videos = [
  {
    id: 1,
    title: "Sisir Saras 2023",
    src: "https://ijentech.com/ormas-newdesign/assets/video/Video2.mp4",
    thumbnail:
      "https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg",
  },
  {
    id: 2,
    title: "Function",
    src: "https://ijentech.com/ormas-newdesign/assets/video/video1.mp4",
    thumbnail:
      "https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg",
  },
];

export default function Dashboard() {
  const [style, setStyle] = useState("bg-color2 ");
  const [zoomLevel, setZoomLevel] = useState(14); // start with 100% zoom level


  // useEffect(() => {
  //   const defaultFontSize = parseInt(getComputedStyle(document.documentElement).fontSize);
  //   setZoomLevel(defaultFontSize);
  // }, []);
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 2); // increase zoom level by 25%
  };
  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 2); // decrease zoom level by 25%
  };

  const handleZoom = () => {
    setZoomLevel(14); // decrease zoom level by 25%
  };


  const changeStyle = () => {
    setStyle("bg-color2");
  };

  const changeStyle2 = () => {
    setStyle("bg-color");
  };

  const changeStyle3 = () => {
    setStyle("bg-color3");
  };
  const changeStyle4 = () => {
    setStyle("bg-color4");
  };
  const changeStyle5 = () => {
    setStyle("bg-color5 ");
  };

  return (
    <div >
      <header className={style}>
        <div className="sub-header">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col">
                <ul className="left-info">
                  <li className="mobilecontent"  >
                    <a style={{ fontSize: `${zoomLevel}px`}}
                      href="https://www.odisha.gov.in/"
                      title="Government of Odisha"
                    >
                      Goverment of Odisha{" "}
                      <span className="px-2">| ଓଡ଼ିଶା ସରକାର</span>
                    </a>
                    <span className="mobile-none">
                      <a
                        href="javascript:void(0);"
                        onClick={handleZoomOut}
                        style={{ fontSize: `${zoomLevel}px`}}
                        title="Smaller Size"
                        className="m-1 smaller"
                      >
                        &#8210;
                      </a>

                      <a
                      style={{ fontSize: `${zoomLevel}px`}}
                        href="javascript:void(0);"
                        onClick={handleZoom}
                        title="Default Size"
                        className="m-1 switch"
                      >
                        A
                      </a>
                      <a
                      style={{ fontSize: `${zoomLevel}px`}}
                        href="javascript:void(0);"
                        onClick={handleZoomIn}
                        title="Bigger Size"
                        className="m-1 switch bigger"
                      >
                        +
                      </a>
                      <span className="text-white mx-2">| </span>

                      <Button
                        variant="light"
                        className="p-1 rounded-0 border-2 border-white m-1"
                        onClick={changeStyle}
                      ></Button>
                      <Button
                        variant="dark"
                        className="p-1 rounded-0 border-2 border-white m-1"
                        onClick={changeStyle2}
                      ></Button>
                      <span className="text-white mx-2">| </span>

                      <Button
                        variant="danger"
                        className="p-1 rounded-0 border-2 border-white m-1"
                        onClick={changeStyle3}
                      ></Button>
                      <Button
                        variant="warning"
                        className="p-1 rounded-0 border-2 border-white m-1"
                        onClick={changeStyle4}
                      ></Button>
                      <Button
                        variant="success"
                        className="p-1 rounded-0 border-2 border-white m-1"
                        onClick={changeStyle5}
                      ></Button>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-auto d-none d-sm-block">
                <ul className="left-info">
                  <li className="text-white" style={{ fontSize: `${zoomLevel}px`}}>
                    <a
                      href="/#"
                      className="text-white govpart"
                      title="Government of Odisha"
                      style={{ fontSize: `${zoomLevel}px`}}
                    >
                      <span> RTI |</span>
                    </a>
                    <a
                      href="/#"
                      style={{ fontSize: `${zoomLevel}px`}}
                      className="text-white govpart"
                      title="Feedback "
                    >
                      <span> Feedback | </span>
                    </a>
                    <a
                    style={{ fontSize: `${zoomLevel}px`}}
                      href="/#"
                      className="text-white govpart"
                      title="Annual Report"
                    >
                      <span> Annual Report</span>
                    </a>
                    <a href="/#" className="text-white " title="ଓଡ଼ିଶା" style={{ fontSize: `${zoomLevel}px`}}>
                      <span className="px-3 text-white govpart">| ଓଡ଼ିଶା</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2 d-none d-sm-block">
                <ul className="right-icons">
                  <li className="bg-primary">
                    <a href="/#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="bg-info">
                    <a href="/#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="bg-primary">
                    <a className="" href="/#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="bg-danger">
                    <a href="/#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LogoSection  style={style} zoomLevel={zoomLevel}/>
      <Navbar style={style} zoomLevel={zoomLevel}/>
      {/* <Slider/> */}
      <Hero style={style} zoomLevel={zoomLevel}/>
      <Notification style={style} zoomLevel={zoomLevel}/>
      <Team style={style} zoomLevel={zoomLevel}/>
      <About style={style} zoomLevel={zoomLevel}/>
      <Gallery style={style} zoomLevel={zoomLevel}/>
      <VideoGallery videos={videos} style={style} zoomLevel={zoomLevel}/>
      <Products style={style} zoomLevel={zoomLevel}/>
      <ImportantLink style={style} zoomLevel={zoomLevel}/>
      <Footer style={style} zoomLevel={zoomLevel}/>
      <Copyright style={style} zoomLevel={zoomLevel} />
    </div>
  );
}
