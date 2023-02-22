import React from 'react'
import img from "../../../assets/images/DDU-GKY/Physical Milestone/Pic.MoRD_AWARD_17-18.jpg";
import img1 from "../../../assets/images/DDU-GKY/Physical Milestone/Trophy.jpg";
import img2 from "../../../assets/images/DDU-GKY/Physical Milestone/AWARD_2017-18.jpg";
import img3 from "../../../assets/images/DDU-GKY/Physical Milestone/AWARD_2019-20.jpg";

function DdugkyPhysicalMilestone() {
  return (
    <div>
       <div class="container p-3">
        <h3>
            Physical Milestone
        </h3>
        <ul class="list-unstyled">
            <li>Number of PIA - 69</li>
            <li>Number of Projects- 115</li>
            <li>Number of Active Centers- 73</li>
            <li>Number of Trained candidates (2019-20) - 43156</li>
            <li>No of Placed candidates- 30607</li>
            <li>% of placement- 71%</li>
            <li>Number of districts covered - 30</li>

            <h4 class="mt-4">Recogination</h4>

            <li>by Ministry of Rural Development, Government of India as a Best Performing State for the year 2016-17,
                2017-18 and 2018-19.</li>


        </ul>



        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12  col-lg-3">
                        <img src={img} class="img-fluid w-100 border border-5 " alt="..."/>

                    </div>
                    <div class="col-12  col-lg-3">
                      <img src={img1} class="img-fluid w-100 border border-5" alt="..."/>

                    </div>
                    <div class="col-12  col-lg-3">
                        <img src={img2} class="img-fluid w-100 border border-5" alt="..."/>

                    </div>
                    <div class="col-12  col-lg-3">
                        <img src={img3} class="img-fluid w-100 border border-5" alt="..."/>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DdugkyPhysicalMilestone