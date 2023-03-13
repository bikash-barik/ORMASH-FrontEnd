import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardPart from "../components/Body/DashboardPart";

export default function Dashboard({history}) {


  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }
  // useEffect(() => {
  //   if (!userInfo) {
  //     console.log("hello ji ");
  //     history.push("/login");
  //     window.location.reload(false);
  //   } 
  // }, [history, userInfo]);

  return (
    <>
      <h3>
        <i class="bi bi-geo-alt-fill"></i>
        <span> Home /</span>Dashboard
      </h3>
      <DashboardPart />
    </>
  );
}
