import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import LandingPage from "../Pages/LandingPage";
import LandingPage from '../components/Application/LoginScreen/LoginScreen';
import RegisterScreen from '../components/Application/RegisterScreen/RegisterScreen';
// import Header from '../components/Application/LandingPage/Header';
import Home from '../Pages/UserEnd/Home';
import Tender from '../components/UI/Tender/Tender';
import Navbar from '../components/landingpage/navbar/Navbar';
import LogoSection from '../components/landingpage/logosection/LogoSection';
import { Button } from 'react-bootstrap';
import Copyright from '../components/landingpage/footer/Copyright';
import Activities from '../components/UI/Activities/Activities';
import Organisation from '../components/UI/AboutUs/Organisation';
import MissionandVision from '../components/UI/AboutUs/MissionandVision';
import Organogram from '../components/UI/AboutUs/Organogram';
import ContactDetailsHQDist from '../components/UI/AboutUs/ContactDetailsHQDist';
import DDUGKYTrainingTrades from '../components/UI/DDU-GKY/DDU-GKY-TrainingTrades';
import DdugkyPhysicalMilestone from '../components/UI/DDU-GKY/DdugkyPhysicalMilestone';
import DDUGKYTrainingSectors from '../components/UI/DDU-GKY/DDU-GKYTrainingSectors';
import Product from '../components/UI/Products/Product';
import ProductsBrochure from '../components/UI/Products/ProductsBrochure';
import ExhibitionCalender from '../components/UI/Exhibition/ExhibitionCalender';

const AppRouter = () => {
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
    <>
      <Router>
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
        {/* <Header/> */}
        <LogoSection  style={style} zoomLevel={zoomLevel}/>
      <Navbar style={style} zoomLevel={zoomLevel}/>
        <Switch>
          {/* <Route exact path='/'  component={Home}  /> */}
          <Route exact path='/Login' component={LandingPage} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/Tender' component={Tender} />
          <Route path='/Activities' component={Activities} />
          <Route path='/Organisation' component={Organisation} />
          <Route path='/MissionandVision' component={MissionandVision} />
          <Route path='/Organogram' component={Organogram} />
          <Route path='/ContactDetailsHQDist' component={ContactDetailsHQDist} />
          <Route path='/DDUGKYTrainingTrades' component={DDUGKYTrainingTrades} />
          <Route path='/DdugkyPhysicalMilestone' component={DdugkyPhysicalMilestone} />
          <Route path='/DDUGKYTrainingSectors' component={DDUGKYTrainingSectors} />
          <Route path='/Product' component={Product} />
          <Route path='/ProductsBrochure' component={ProductsBrochure} />
          <Route path='/ExhibitionCalender' component={ExhibitionCalender} />
        </Switch>

      <Copyright style={style} zoomLevel={zoomLevel} />

      </Router>
    </>
  );
};

export default AppRouter;
