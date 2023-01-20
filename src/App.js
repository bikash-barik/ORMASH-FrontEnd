import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages import
import Dashboard from "./Pages/Dashboard";
import AddNewMagazin from "./Pages/Application/UserProfile";
import FreeCoupon from './Pages/FreeCoupan';
import SubAccount from "./Pages/SubAccount";
import LicenceeAccount from "./Pages/LicenceeAccount";
import DownloaadReporrts from "./Pages/DownloaadReporrts";
import UpdateBankDetails from "./Pages/UpdateBankDetails";
import Tutorials from "./Pages/Tutorials";
import Promote from "./Pages/Promote";
import AddNewsPaper from "./Pages/AddNewsPaper";
import AddNew from "./Pages/AddNewItems";



// function App() {
//   const [inactive, setInactive] = useState(false);

//   return (
//     <div className="App">
//       <Router>
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />

//         <div className={`container ${inactive ? "inactive" : ""}`}>
         

//           <Switch>
//             <Route exact path={"/"}>
//               <Dashboard />
//             </Route>
//             <Route exact path={"/AddNewMagazin"}>
//               <AddNewMagazin />
//             </Route>
//             <Route path={"/AddNewNewspaper"}>
//               <AddNewMagazin />
//             </Route>
//             <Route exact path={"/AddNewsPaper"}>
//               <AddNewsPaper />
//             </Route>
//             <Route path={"/FreeCoupon"}>
//               <FreeCoupon />
//             </Route>
//             <Route path={"/SubAccount"}>
//               <SubAccount />
//             </Route>
//             <Route exact path={"/LicenceeAccount"}>
//               <LicenceeAccount />
//             </Route>
//             <Route path={"/DownloaadReporrts"}>
//               <DownloaadReporrts />
//             </Route>
//             <Route path={"/UpdateBankDetails"}>
//               <UpdateBankDetails />
//             </Route>
//             <Route path={"/Tutorials"}>
//               <Tutorials />
//             </Route>
//             <Route path={"/Promote"}>
//               <Promote />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }
// export default App;



import React from 'react'
import Hubrouters from "./Routers/Hubrouters";
import LandingPage from "./Pages/LandingPage";
import IndexRouter from "./Routers/IndexRouter";




function App() {
  return (
    <>
    <Router >
      <Switch>
      {/* <Route path="/" component={HomeRouter} /> */}
      <Route path="/hub" component={Hubrouters} />
      

       <IndexRouter/>
      </Switch>
    </Router>
      
    </>

  );
}

export default App;

