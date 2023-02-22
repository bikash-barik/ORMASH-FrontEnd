import React from 'react'
import Activityimg from "../../../assets/images/Activity/Activity.jpg"
// import Activityimg from "../../images/Activity/Activity.jpg"
const Activities = () => {
  return (
    <div>
          <div class="container">
        <h3 >
            Activities
        </h3>
        <div class="border p-3 text-center">
            <img src={Activityimg} class="img-fluid w-75" alt="..."/>
        </div>


    </div>
    </div>
  )
}

export default Activities