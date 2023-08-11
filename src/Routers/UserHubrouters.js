// import "../App.css";
import SideMenu, { menuItems } from "../components/SideMenu";
import SubSideMenu from "../components/SubSideMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";

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
import UpdateOfficerProfile from "../components/Application/Content Managament/UpdateOfficerProfile";
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
import { useSelector } from "react-redux";
import NotFound from "../Pages/NotFound";
import ProfileScreen from "../components/Application/ProfileScreen/SubProfileScreen";
import PasswordChange from "../components/Application/ProfileScreen/PasswordChange";
import Emailsend from "../Pages/SendEmailPagesUI/Componets/EmailSand";
import UpgradURPlanPart from "../components/Body/UpgradURPlanPart";
function UserHubrouters({ history }) {
  const [inactive, setInactive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }
  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/login");
  //     window.location.reload(false);
  //   }
  // }, [history, userInfo]);

  return (
    <div className="App">
      <Router>
        <SubSideMenu
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
            <Route exact path="/user/Dashbord" component={Dashboard} />
            <Route exact path="/user/upplan" component={UpgradURPlanPart} />
            <Route exact path="/user/upplan1" component={UpgradURPlanPart} />
            <Route exact path="/user/upplan2" component={UpgradURPlanPart} />
            <Route exact path="/user/upplan3" component={UpgradURPlanPart} />
            <Route exact path={"/user/UserProfile"}>
              <UserProfile />
            </Route>
            <Route exact path={"/user/AddUserProfile"}>
              <AddUserProfile />
            </Route>
            <Route exact path={"/user/AddUserProfile/:id"}>
              <AddUserProfile />
            </Route>
            <Route exact path={"/user/UpdateOfficerProfile/:id"}>
              <UpdateOfficerProfile />
            </Route>
            <Route path={"/user/SetPermission"}>
              <SetPermission />
            </Route>
            <Route exact path={"/user/GlowbalLink"}>
              <GlowbalLink />
            </Route>
            <Route exact path={"/user/PrimaryLink"}>
              <PrimaryLink />
            </Route>

            <Route exact path={"/user/AddPrimaryLink"}>
              <AddPrimaryLink />
            </Route>
            <Route exact path={"/user/AddPrimaryLink/:id"}>
              <AddPrimaryLink />
            </Route>
            <Route exact path={"/user/AddGlobalLink"}>
              <AddGlobalLink />
            </Route>
            <Route exact path={"/user/AddGlobalLink/:id"}>
              <AddGlobalLink />
            </Route>
            <Route exact path={"/user/ViewContent"}>
              <ViewContent />
            </Route>
            <Route exact path={"/user/OfficerProfileDetails"}>
              <OfficerProfileDetails />
            </Route>
            <Route exact path={"/user/AddOfficerProfile"}>
              <AddOfficerProfile />
            </Route>
            <Route exact path={"/user/AddContent"}>
              <AddContent />
            </Route>
            <Route exact path={"/user/AddContent/:id"}>
              <AddContent />
            </Route>
            <Route path={"/user/Work"}>
              <Work />
            </Route>
            <Route path={"/user/Assignwork"}>
              <Assignwork />
            </Route>
            <Route path={"/user/AddEmployee"}>
              <AddEmployee />
            </Route>
            <Route path={"/user/Employee"}>
              <Employee />
            </Route>
            <Route path={"/user/Tender"}>
              <Tender />
            </Route>
            <Route path={"/user/Tender/:id"}>
              <Tender />
            </Route>
            <Route path={"/user/AddTender"}>
              <AddTender />
            </Route>
            <Route path={"/user/Addendum"}>
              <Addendum />
            </Route>
            <Route path={"/user/Corrigendum"}>
              <Corrigendum />
            </Route>
            <Route path={"/user/Product"}>
              <NewsUpdate />
            </Route>
            <Route path={"/user/AddNews"}>
              <AddNews />
            </Route>
            <Route path={"/user/Document"}>
              <Document />
            </Route>
            <Route path={"/user/AddDocument"}>
              <AddDocument />
            </Route>
            <Route path={"/user/ImportantLink"}>
              <ImportantLink />
            </Route>
            <Route path={"/user/AddImportantLink"}>
              <AddImportantLink />
            </Route>
            <Route path={"/user/Gallery"}>
              <Gallery />
            </Route>
            <Route path={"/user/Gallery"}>
              <Gallery />
            </Route>
            <Route path={"/user/AddGallery"}>
              <AddGallery />
            </Route>
            <Route path={"/user/Video"}>
              <Video />
            </Route>
            <Route path={"/user/AddVideo"}>
              <AddVideo />
            </Route>
            <Route path={"/user/Achivement"}>
              <Achivement />
            </Route>
            <Route path={"/user/AddAchivement"}>
              <AddAchivement />
            </Route>
            <Route path={"/user/ManageLogo"}>
              <ManageLogo />
            </Route>
            <Route path={"/user/WhatsNew"}>
              <WhatsNew />
            </Route>
            <Route path={"/user/AddWhatsNew"}>
              <AddWhatsNew />
            </Route>
            <Route path={"/user/ManageBanner"}>
              <ManageBanner />
            </Route>
            <Route path={"/user/AddManageBanner"}>
              <AddManageBanner />
            </Route>
            <Route path={"/user/Feedback"}>
              <Feedback />
            </Route>
            <Route path={"/user/UpdateContactDetails"}>
              <UpdateContactDetails />
            </Route>
            <Route path={"/user/PasswordChange"}>
              <PasswordChange />
            </Route>

            <Route path={"/user/Profile"}>
              <ProfileScreen />
            </Route>

            <Route path="/user/Emailsend" component={Emailsend} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default UserHubrouters;
