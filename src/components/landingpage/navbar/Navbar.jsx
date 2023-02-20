import React, { useState, useEffect } from "react";
import "./Navebar.css";
import axios from "axios";
import { NavDropdown, Nav } from "react-bootstrap";
const Navbar = ({ style }) => {
  const [data, setData] = useState([]);
  const [primaryLinks, setPrimaryLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const getData = async () => {
    try {
      const response = await axios.get("/api/globallinks/", {
        mode: 'cors',
        credentials: 'include'
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
      // console.log(globalLink.link_name)
      const response = await axios.get(
        `/api/primarylinks?globalLink=${globalLink.link_name}`, {
          mode: 'cors',
          credentials: 'include'
        }
      );
      setPrimaryLinks(response.data.primaryLinks);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  return (
    <div className={style}>
      <nav
        className={`navbar navbar-expand-lg w-full`}
        id="navigationBar"
        style={{ zIndex: "999" }}
      >
        <div className="container d-flex g-2 p-2 align-items-center">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navSupportContent"
            aria-controls="navSupportContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-bars"></i>
            </span>
          </button>

          <div
            className="collapse mx-auto navbar-collapse"
            id="navSupportContent"
          >
            <ul className="navbar-nav gx-2 mx-auto">
              {data.length > 0 &&
                data.map((item) => (
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={item.link_name}
                      className="nav-item"
                      menuVariant="dark"
                      style={{ backgroundColor: "inherit" }}
                      onClick={() => clickHandler(item)}
                    >
                      {primaryLinks.length > 0 &&
                        primaryLinks.map((el) => (
                          <NavDropdown.Item
                            // style={{ display: el ? 'block' : 'none' }}
                            className="pt-2 px-3"
                            href={el.function_name}
                          >
                            {el.link_name}
                          </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                  </Nav>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

// <li
// className="dropdown"
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
// >
// <a href="#">{item.link_name}</a>
// <ul
//   className="dropdown-content"
//   style={{ display: isOpen ? "block" : "none" }}
// >
//   {primaryLinks.length > 0 &&
//     primaryLinks.map((el) => (
//       <NavDropdown.Item
//         style={{ display: isOpen ? 'block' : 'none' }}
//         className="pt-2 px-3"
//         href="#action/3.1"
//       >
//         {el.link_name}
//       </NavDropdown.Item>
//       <li>
//       <a className="pt-2 px-3"
//         href="#action/3.1"> {el.link_name}</a>
//     </li>
//     ))}
//   <li>
//     <a href="#">Option 1</a>
//   </li>
//   <li>
//     <a href="#">Option 2</a>
//   </li>
//   <li>
//     <a href="#">Option 3</a>
//   </li>
// </ul>
// </li>
