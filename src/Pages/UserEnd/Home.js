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
    <>
      <header className={style}>
        <div className="sub-header">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col">
                <ul className="left-info">
                  <li className="mobilecontent">
                    <a
                      href="https://www.odisha.gov.in/"
                      title="Government of Odisha"
                    >
                      Goverment of Odisha{" "}
                      <span className="px-2">| ଓଡ଼ିଶା ସରକାର</span>
                    </a>
                    <span className="mobile-none">
                      <a
                        href="javascript:void(0);"
                        onclick="return fontSizer('small');"
                        title="Smaller Size"
                        className="m-1 smaller"
                      >
                        &#8210;
                      </a>

                      <a
                        href="javascript:void(0);"
                        onclick="return fontSizer('default');"
                        title="Default Size"
                        className="m-1 switch"
                      >
                        A
                      </a>
                      <a
                        href="javascript:void(0);"
                        onclick="return fontSizer('larger');"
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
                  <li className="text-white">
                    <a
                      href="/#"
                      className="text-white govpart"
                      title="Government of Odisha"
                    >
                      <span> RTI |</span>
                    </a>
                    <a
                      href="/#"
                      className="text-white govpart"
                      title="Feedback "
                    >
                      <span> Feedback | </span>
                    </a>
                    <a
                      href="/#"
                      className="text-white govpart"
                      title="Annual Report"
                    >
                      <span> Annual Report</span>
                    </a>
                    <a href="/#" className="text-white " title="ଓଡ଼ିଶା">
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
      <LogoSection  style={style}/>
      <Navbar style={style}/>
      {/* <Slider/> */}
      <Hero style={style} />
      <Notification style={style}/>
      <Team style={style}/>
      <About style={style}/>
      <Gallery style={style}/>
      <VideoGallery videos={videos} style={style}/>
      <Products style={style}/>
      <ImportantLink style={style} />
      <Footer style={style}/>
      <Copyright style={style}  />
    </>
  );
}
