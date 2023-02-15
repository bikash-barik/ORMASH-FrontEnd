

import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavDropdown,Nav} from "react-bootstrap"
const Navbar = () => {
   const [data, setData] = useState([]);
   const [primaryLinks, setPrimaryLinks] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/api/globallinks/")

      setData(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {

    getData()

  }, [])
  const clickHandler = async (globalLink) =>{
        try {
          // console.log(globalLink.link_name)
          const response = await axios.get(`/api/primarylinks?globalLink=${globalLink.link_name}`)
          setPrimaryLinks(response.data.primaryLinks);
          // console.log(response.data);
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <nav
      className="navbar navbar-expand-lg w-full bg-color"
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

          <ul className='navbar-nav gx-2 mx-auto'>
          {data.length > 0 && data.map((item)=>(


            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={item.link_name}
                className="nav-item"
                menuVariant="dark"
                style={{backgroundColor:"inherit"}}
                onClick={() => clickHandler(item)}
              >

              {primaryLinks.length > 0 && primaryLinks.map((el)=>(
                   <NavDropdown.Item   className="pt-2 px-3" href="#action/3.1">{el.link_name}</NavDropdown.Item>
              ))}
             
              </NavDropdown>
            </Nav>  
          ))}

               
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
