import React, { useState, useEffect, useRef } from "react";
import "./Navebar.css";
import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";

const excludePaths = ["/error"];
const Navbar = ({ style, zoomLevel }) => {
  const [data, setData] = useState([]);
  const [primaryLinks, setPrimaryLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.pageYOffset > 150);
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/globallinks/`, {
        mode: "cors",
        credentials: "include",
      });

      setData(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const clickHandler = async (globalLink) => {
    try {
      setActiveLink(globalLink.link_name);
      const response = await axios.get(
        `${APIURL}/api/primarylinks?globalLink=${globalLink.link_name}`,
        {
          mode: "cors",
          credentials: "include",
        }
      );
      setPrimaryLinks(response.data.primaryLinks);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = (globalLink) => {
    clickHandler(globalLink);
  };

  const handleMouseLeave = () => {};

  const dropdownRef = useRef(null);

  const handleMouseEnterDropdown = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsOpen(false);
  };

  const handleMouseMoveDropdown = () => {
    if (dropdownRef.current) {
      setIsOpen(true);
    }
  };

  return (
    <span className={isSticky ? "sticky" : ""}>
      <div
        className={
          excludePaths.includes(window.location.pathname) ? "d-none" : style
        }
      >
        <nav
          className={`navbar navbar-expand-lg w-full verytop`}
          id="navigationBar"
        >
          <div className="container d-flex g-2 p-2 align-items-center">
            <div
              className="collapse mx-auto navbar-collapse"
              id="navSupportContent"
            >
              <ul
                className="navbar-nav gx-2 mx-auto"
                style={{ fontSize: `${zoomLevel}px` }}
              >
                {data.length > 0 &&
                  data
                    .slice()
                    .sort((a, b) => parseInt(a.sl_no) - parseInt(b.sl_no))
                    .filter((item) => item.publish_status !== true)
                    .map((item) => (
                      <li className="nav-item" key={item.link_name}>
                        <a
                          style={{ fontSize: `${zoomLevel}px` }}
                          className="nav-link "
                          href={`${item.link_name}`}
                          onMouseEnter={() => handleMouseEnter(item)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.link_name}
                        </a>
                        {activeLink === item.link_name && isOpen && (
                          <ul
                            className="dropdown-menu"
                            ref={dropdownRef}
                            onMouseEnter={handleMouseEnterDropdown}
                            onMouseLeave={handleMouseLeaveDropdown}
                            onMouseMove={handleMouseMoveDropdown}
                          >
                            {primaryLinks.length > 0 &&
                              primaryLinks
                                .slice()
                                .sort(
                                  (a, b) =>
                                    parseInt(a.sl_no) - parseInt(b.sl_no)
                                )
                                .filter((item) => item.publish_status !== true)
                                .map((el) => (
                                  <li key={el.link_name}>
                                    <a
                                      className="dropdown-item"
                                      href={el.function_name}
                                      style={{ fontSize: `${zoomLevel}px` }}
                                    >
                                      {el.link_name}
                                    </a>
                                  </li>
                                ))}
                          </ul>
                        )}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </span>
  );
};

export default Navbar;
