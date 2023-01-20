import "../App.css";
import SideMenu, { menuItems } from "../components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/Application/UserProfile";
import Employee from "../Pages/Application/Employee";
import Work from "../Pages/Application/Work";
import AddEmployee from "../components/Application/Employee/AddEmployee";
import AddUserProfile from "../components/Application/Manage User Profile/AddUserProfile";
import SetPermission from "../components/Application/Manage User Profile/SetPermission";
import GlowbalLink from "../components/Application/Manage Links/GlowbalLink";
import PrimaryLink from "../components/Application/Manage Links/PrimaryLink";
import AddPrimaryLink from "../components/Application/Manage Links/AddPrimaryLink";
import AddGlobalLink from "../components/Application/Manage Links/AddGlobalLink";
import ViewContent from "../components/Application/Content Managament/ViewContent";
import OfficerProfileDetails from "../components/Application/Content Managament/OfficerProfileDetails";
import AddOfficerProfile from "../components/Application/Content Managament/AddOfficerProfile";
import AddContent from "../components/Application/Content Managament/AddContent";
import Assignwork from "../components/Application/Work/Assignwork";

import FreeCoupon from '../Pages/FreeCoupan';
import SubAccount from "../Pages/SubAccount";
import LicenceeAccount from "../Pages/LicenceeAccount";
import DownloaadReporrts from "../Pages/DownloaadReporrts";
import UpdateBankDetails from "../Pages/UpdateBankDetails";
import Tutorials from "../Pages/Tutorials";
import Promote from "../Pages/Promote";
import AddNewsPaper from "../Pages/AddNewsPaper";
import AddNewItems from "../Pages/AddNewItems";
import AddnewEBook from "../components/Body/AddNewEBook";
import AddNewUser from "../components/Body/AddNewUser";



function Hubrouters() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`containerall ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {/* {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))} */}

          <Switch>
          <Route exact path="/hub/Dashbord" component={Dashboard}/>
            <Route exact path={"/hub/UserProfile"}>
              <UserProfile />
            </Route>
            <Route exact path={"/hub/AddUserProfile"}>
              <AddUserProfile />

            </Route>
            <Route path={"/hub/SetPermission"}>
              <SetPermission />
            </Route>
            <Route path={"/hub/GlowbalLink"}>
              <GlowbalLink />
            </Route>
            <Route path={"/hub/PrimaryLink"}>
              <PrimaryLink />
            </Route>
            <Route path={"/hub/AddPrimaryLink"}>
              <AddPrimaryLink />
            </Route>
            <Route exact path={"/hub/AddGlobalLink"}>
              <AddGlobalLink />
            </Route>
            <Route path={"/hub/ViewContent"}>
              <ViewContent />
            </Route>
            <Route path={"/hub/OfficerProfileDetails"}>
              <OfficerProfileDetails />
            </Route>
            <Route exact path={"/hub/AddOfficerProfile"}>
              <AddOfficerProfile />
            </Route>
            <Route path={"/hub/AddContent"}>
              <AddContent />
            </Route>
            <Route path={"/hub/Work"}>
              <Work />
            </Route>
            <Route path={"/hub/Assignwork"}>
              <Assignwork />
            </Route>
            <Route path={"/hub/AddEmployee"}>
              <AddEmployee />
            </Route>
            <Route path={"/hub/Employee"}>
              <Employee />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Hubrouters;
