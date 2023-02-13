import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  const [data, setData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const getData = async () => {
    try {
      const response = await axios.get("/api/globallinks/");
      // console.log(response);
      setData(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg w-full bg-dark"
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
                <li className="nav-item"   onMouseLeave={() => setShowDropdown(false)}
                onMouseOver={() => setShowDropdown(true)}>
                  <a href="#home" className="nav-link active"   >
                    {item.link_name}
                  </a>
                  
                </li>
               
              ))}

            {/* <Dropdown
              onMouseLeave={() => setShowDropdown(false)}
              onMouseOver={() => setShowDropdown(true)}
              style={{ width: "166px" }}
            >
              <Dropdown.Toggle className="main-style p-1 nav-link" id="dropdown-basic">
                Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu show={showDropdown}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                About
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Organisation.html'
                  >
                    Organisation
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/MissionandVision.html'
                  >
                    Mission and Vision
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/ContactDetailsHQDist.html'
                  >
                    Official Contact Details
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Organogram.html'
                  >
                    Organogram
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                DDU-GKY
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/DDU-GKYTrainingSectors.html'
                  >
                    DDU-GKY-Training-Sectors
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/PhysicalMilestone.HTML'
                  >
                    DDU-GKY-Physical Milestone
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/DDU-GKY/DDU-GKY-TrainingTrades.html'
                  >
                    DDU-GKY-Training-Trades
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Activities
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/#'
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Products
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/Product.html'
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/ProductsBrochure.html'
                  >
                    Products Brochure
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/BalasoreProductCatlog.html'
                  >
                    Balasore Product Catlog
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Products/Product-MayurbhanjSabai.html'
                  >
                    Product Catlog Mayurbhanj
                  </a>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Exhibition
              </a>
              <ul
                className='dropdown-menu'
                style={{
                  background:
                    'linear-gradient(to bottom, #5f2c82 ,#49a09d 99%)',
                }}
              >
                <li>
                  <a
                    className='dropdown-item border border-2 border-suuces'
                    href='/Pages/Exhibition/ExhibitionCalender.html'
                  >
                    Exhibition Calender
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Exhibition/Reports.html'
                  >
                    Reports{' '}
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item border border-2 border-info'
                    href='/Pages/Exhibition/SisirSaras2020.html'
                  >
                    SISIR SARAS 2020
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='/#' className='nav-link'>
                Tender
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
