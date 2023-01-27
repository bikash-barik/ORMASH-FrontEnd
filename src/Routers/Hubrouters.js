// import "../App.css";
import SideMenu, { menuItems } from "../components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "../Pages/Dashboard";
import UserProfile from "../Pages/Application/UserProfile";
import Employee from "../Pages/Application/Employee";
import Work from "../Pages/Application/Work";
import Tender from "../Pages/Application/Tender";
import Document from "../Pages/Application/Document";
import ImportantLink from "../Pages/Application/ImportantLink";
import Gallery from "../Pages/Application/Gallery";
import Video from "../Pages/Application/Video";
import Achivement from "../Pages/Application/Achivement";
import ManageLogo from "../Pages/Application/ManageLogo";
import WhatsNew from "../Pages/Application/WhatsNew";
import ManageBanner from "../Pages/Application/ManageBanner";
import Feedback from "../Pages/Application/Feedback";
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
import AddTender from "../components/Application/Manage Application/AddTender";
import Addendum from "../components/Application/Manage Application/Addendum";
import Corrigendum from "../components/Application/Manage Application/Corrigendum";
import NewsUpdate from "../components/Application/Manage Application/NewsUpdate";
import AddNews from "../components/Application/Manage Application/AddNews";
import AddDocument from "../components/Application/Manage Application/AddDocument";
import AddImportantLink from "../components/Application/Manage Application/AddImportantLink";
import AddGallery from "../components/Application/Manage Application/AddGallery";
import AddVideo from "../components/Application/Manage Application/AddVideo";
import AddAchivement from "../components/Application/Manage Application/AddAchivement";
import AddWhatsNew from "../components/Application/Manage Application/AddWhatsNew";
import AddManageBanner from "../components/Application/Manage Application/AddManageBanner";
import UpdateContactDetails from "../components/Application/Manage Application/UpdateContactDetails";




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
            <Route path={"/hub/Tender"}>
              <Tender />
            </Route>
            <Route path={"/hub/AddTender"}>
              <AddTender />
            </Route>
            <Route path={"/hub/Addendum"}>
              <Addendum />
            </Route>
            <Route path={"/hub/Corrigendum"}>
              <Corrigendum />
            </Route>
            <Route path={"/hub/NewsUpdate"}>
              <NewsUpdate />
            </Route>
            <Route path={"/hub/AddNews"}>
              <AddNews />
            </Route>
            <Route path={"/hub/Document"}>
              <Document />
            </Route>
            <Route path={"/hub/AddDocument"}>
              <AddDocument />
            </Route>
            <Route path={"/hub/ImportantLink"}>
              <ImportantLink />
            </Route>
            <Route path={"/hub/AddImportantLink"}>
              <AddImportantLink />
            </Route>
            <Route path={"/hub/Gallery"}>
              <Gallery />
            </Route>
            <Route path={"/hub/Gallery"}>
              <Gallery />
            </Route>
            <Route path={"/hub/AddGallery"}>
              <AddGallery />
            </Route>
            <Route path={"/hub/Video"}>
              <Video />
            </Route>
            <Route path={"/hub/AddVideo"}>
              <AddVideo />
            </Route>
            <Route path={"/hub/Achivement"}>
              <Achivement />
            </Route>
            <Route path={"/hub/AddAchivement"}>
              <AddAchivement />
            </Route>
            <Route path={"/hub/ManageLogo"}>
              <ManageLogo />
            </Route>
            <Route path={"/hub/WhatsNew"}>
              <WhatsNew />
            </Route>
            <Route path={"/hub/AddWhatsNew"}>
              <AddWhatsNew />
            </Route>
            <Route path={"/hub/ManageBanner"}>
              <ManageBanner />
            </Route>
            <Route path={"/hub/AddManageBanner"}>
              <AddManageBanner />
            </Route>
            <Route path={"/hub/Feedback"}>
              <Feedback />
            </Route>
            <Route path={"/hub/UpdateContactDetails"}>
              <UpdateContactDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Hubrouters;
