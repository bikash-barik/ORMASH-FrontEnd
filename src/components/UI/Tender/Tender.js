import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";
import { useDispatch } from "react-redux";
const Tender = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
          const response = await axios.get(`${APIURL}/api/tenders/`)
          // console.log(response);
          setData(response.data.tenders);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
    
        getData()
    
      },[])
  return (
    <div className="container p-3" >
        <h3>
            All Tender
        </h3>
       


        {data.length > 0 &&
                        data.reverse().filter(item => item.publish_status === "set").map((item, i) => (

        <div class="cards w-100 mt-3" key={item._id}>
            <div class="card-header d-flex p-3 bg-color2 " >
                <h4 className='text-white'>Tender No : <samp class="text-danger">{item.tender_no}</samp></h4>

            </div>
            <div class="card-body bg-secondary  pt-4">
                <div class=" g-0 w-100">
                    <div class="row g-0">
                        
                        <div class="col-md-6 ">
                            <div class="card-body text-start">
                                <h5 class="card-title fw-bold text-start"> {item.tender_headline}</h5>
                                <p class="fw-bold text-danger text-start">Closing Date : {item.closing_date.substring(0, 10)}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            {/* <!-- <img src="../../images/DDU Product/product/haldi.gif" class="img-fluid rounded-end w-100 "
                                alt="..."> -->   {item.document_one} */}
                                <iframe src="http://ormas.org/Application/uploadDocuments/Tender/Tender_220221231_144045.pdf" width="100%" height="300px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

))}

        {/* <!-- <div class="border border-3 rounded w-100 text-center p-2">
            # For price of a certain product you may contact at <a class="text-decoration-none">ormasmarketing@gmail.com </a> / <a class="text-decoration-none">ormashq@gmail.com</a>"
          </div> --> */}
    </div>
  )
}

export default Tender