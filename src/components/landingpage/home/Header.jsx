import { useState } from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  const [style, setStyle] = useState("bg-color");

  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("bg-color2");
  };

  const changeStyle2 = () => {
    console.log("you just clicked");
    setStyle("bg-color");
  };
  return (
    <header className={style}>
      <div className="sub-header" >
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col">
              <ul className="left-info">
                <li>
                  <a
                    href="https://www.odisha.gov.in/"
                    title="Government of Odisha"
                  >
                    Goverment of Odisha{" "}
                    <span className="px-2">| ଓଡ଼ିଶା ସରକାର</span>
                  </a>
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
                    className="p-1 rounded-0 border-2 border-white m-1" onClick={changeStyle2}
                  ></Button>
                  <span className="text-white mx-2">| </span>

                  <Button
                    variant="danger"
                    className="p-1 rounded-0 border-2 border-white m-1"
                  ></Button>
                  <Button
                    variant="warning"
                    className="p-1 rounded-0 border-2 border-white m-1"
                  ></Button>
                  <Button
                    variant="primary"
                    className="p-1 rounded-0 border-2 border-white m-1"
                  ></Button>
                </li>
              </ul>
            </div>
            <div className="col-md-auto d-none d-sm-block">
              <ul className="left-info">
                <li>
                  <a
                    href="/#"
                    className="text-warning"
                    title="Government of Odisha"
                  >
                    RTI | Feedback | Annual Report
                    <span className="px-3 text-white">| ଓଡ଼ିଶା</span>
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
  );
};
export default Header;
