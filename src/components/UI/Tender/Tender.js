import React from 'react'

const Tender = () => {
  return (
    <div class="container p-3">
        <h3>
            All Tender
        </h3>
       




        <div class="cards w-100 ">
            <div class="card-header d-flex p-3 bg-primary ">
                <h4 className='text-white'>Tender No : <samp class="text-danger">3974</samp></h4>

            </div>
            <div class="card-body bg-secondary  pt-4">
                <div class=" g-0 w-100">
                    <div class="row g-0">
                        
                        <div class="col-md-6 ">
                            <div class="card-body text-start">
                                <h5 class="card-title fw-bold text-start">TENDER CALL NOTICE for Empanelment of Packaging Agencies.</h5>
                                <p class="fw-bold text-danger text-start">Closing Date : 19-Jan-2023, 03:30 PM</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            {/* <!-- <img src="../../images/DDU Product/product/haldi.gif" class="img-fluid rounded-end w-100 "
                                alt="..."> --> */}
                                <iframe src="http://ormas.org/Application/uploadDocuments/Tender/Tender_220221231_144045.pdf" width="100%" height="300px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    

        {/* <!-- <div class="border border-3 rounded w-100 text-center p-2">
            # For price of a certain product you may contact at <a class="text-decoration-none">ormasmarketing@gmail.com </a> / <a class="text-decoration-none">ormashq@gmail.com</a>"
          </div> --> */}
    </div>
  )
}

export default Tender