import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/userimg.png";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { logout } from "../Redux/actions/userActions";
import "../Style/SideBar.css";
import { useHistory } from "react-router";
import headerLogo from "../assets/images/header-logo.png";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/hub/Dashbord",
    iconClassName: "bi bi-house-door",
  },
  {
    name: "Manage User",
    exact: true,
    // to: `/Magazines`,
    iconClassName: "bi bi-people",
    subMenus: [
      { name: "User Profile ", to: "/hub/UserProfile" },
      // { name: "Add New Magazines", to: "/hub/AddNewMagazin" },
      { name: "Set Permission", to: "/hub/SetPermission" },
    ],
  },
  // {
  //   name: "Coupon",
  //   exact: true,
  //   to: `/Coupan`,
  //   iconClassName: "bi bi-cash",
  //   subMenus: [
  //     { name: "Free Coupon", to: "/hub/FreeCoupon" },
  //   ],
  // },

  {
    name: "Manage Link",
    exact: true,
    // to: `/Accounts`,
    iconClassName: "bi bi-link-45deg",
    subMenus: [
      { name: "Global Link", to: "/hub/GlowbalLink" },
      { name: "Primary Link ", to: "/hub/PrimaryLink" },
    ],
  },

  {
    name: "Content Management",
    exact: true,
    // to: `/content-3`,
    iconClassName: "bi bi-kanban",
    subMenus: [
      { name: "Content ", to: "/hub/ViewContent" },
      { name: "Officer Profile", to: "/hub/OfficerProfileDetails" },
    ],
  },
  // { name: "Update Bank Details", to: `/hub/UpdateBankDetails`, iconClassName: "bi bi-cash" },
  // { name: "Tutorials", to: `/hub/Tutorials`, iconClassName: "bi bi-book-half" },
  // {
  //   name: "Promotions",
  //   exact: true,
  //   to: `/hub/Promotions`,
  //   iconClassName: "bi bi-bell",
  //   subMenus: [
  //     { name: "Promote", to: "/hub/Promote" },
  //     { name: "Custom Banners", to: "/hub/CustomBanners" },
  //   ],
  // },

  {
    name: "Manage Application",
    exact: true,
    // to: ``,
    iconClassName: "bi bi-kanban",
    subMenus: [
      { name: "Tender", to: "/hub/Tender" },
      { name: "News Updates", to: "/hub/NewsUpdate" },
      { name: "Document", to: "/hub/Document" },
      { name: "Important Links", to: "/hub/ImportantLink" },
      { name: "Gallery", to: "/hub/Gallery" },
      { name: "Video", to: "/hub/Video" },
      { name: "Achivements", to: "/hub/Achivement" },
      { name: "Manage Logo", to: "/hub/ManageLogo" },
      { name: "Manage Banner", to: "/hub/ManageBanner" },
      { name: "Whats New", to: "/hub/WhatsNew" },
      { name: "Feedback", to: "/hub/Feedback" },
    ],
  },
  // {
  //   name: "Employee",
  //   to: `/hub/Employee`,
  //   iconClassName: "bi bi-person",
  // },
  // {
  //   name: "Work",
  //   to: `/hub/Work`,
  //   iconClassName: "bi bi-list-task",
  // },
  // {
  //   name: "Send SMS",
  //   to: ``,
  //   iconClassName: "bi bi-phone",
  // },
  {
    name: "More Application",
    exact: true,
    // to: `/hub/Analytics`,
    iconClassName: "bi bi-briefcase",
    subMenus: [
      { name: "Employee", to: "/hub/Employee" },
      { name: "Work", to: "/hub/work" },
      { name: "Send SMS", to: "/hub/Dashbord" },
      { name: "E-Mail", to: "/hub/Dashbords" },
    ],
  },
  {
    name: "Settings",
    exact: true,
    // to: `/hub/Analytics`,
    iconClassName: "bi bi-gear-fill",
    subMenus: [
      { name: "Change Password", to: "/hub/PasswordChange" },
      { name: "View Profile", to: "/hub/profile" },
    ],
  },
  // { name: "E-Mail", to: `https://tanumanasa.com/`, iconClassName: "bi bi-briefcase" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [date, setDate] = useState(new Date());
  //Login Credentials
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const logoutHandler = () => {
    if (window.confirm("Are you sure to logout?")) {
      dispatch(logout());
      history.push("/");
      window.location.reload(true);
    }
  };
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {}, [userInfo]);
  //end of the login

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

 
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <a href="/">
            <img src={headerLogo} alt="webscript" />
          </a>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          <a onClick={logoutHandler} className="text-decoration-none">
            <li>
              <samp className="menu-item">
                <div className="menu-icon">
                  <i class="bi bi-box-arrow-left"></i>
                </div>
                <span>Logout</span>
              </samp>
            </li>
          </a>
          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

      <a href="/hub/profile">
        <div className="side-menu-footer">
          <div className="avatar">
            <img src={`${userInfo.pic}`} alt="user" />
          </div>
          <div className="user-info">
            <h5 className="h3 text-white bold"> {`${userInfo.name}`}</h5>
            <p>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SideMenu;
