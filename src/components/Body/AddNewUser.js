import React from 'react'

const AddNewUser = () => {
  return (
    <div>
         <form action="" className=''>
        <div class="magazin-container">
          <h1 className="magazin-heading">Add New User</h1>

          <hr />

          <label for="MagazineName">
            <b className=" manage_fonts"> Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter You Name"
            name="MagazineName"
            id="MagazineName"
            required
          />
          {/* <hr />
          <label for="PublishingCompany">
            <b className=" manage_fonts">Publishing Company</b>
          </label>
          <input
            type="text"
            placeholder="Select the company for which magazine is created"
            name="PublishingCompany"
            id="PublishingCompany"
            required
          /> */}
         
          <hr />
          <label for="PrimaryCategory">
            <b className=" manage_fonts">Email</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Ex. example@domain.com"
            name="PrimaryCategory"
            id="PrimaryCategory"
            required
          />

          <hr />
          <label for="SecondaryCategory">
            <b className="manage_fonts">Status</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="If you do not find a suitable category then please email us contact@vaychayan.com)"
            name="SecondaryCategory"
            id="SecondaryCategory"
            required
          />
          <hr />
          <label for="AgeRating">
            <b className=" manage_fonts">Access</b>
          </label><br/>
          <select name="country" className="input_box">
                <option value="australia">Select Access</option>
                <option value="australia">Journal</option>
                <option value="australia">Article</option>
                <option value="australia">EBook</option>
            
             </select>
          <hr />
         
          <label for="WebsiteUrl">
            <b className=" manage_fonts">Action</b>
          </label>
          <select name="country" className="input_box">
                <option value="australia">Select Action Type</option>
                <option value="australia">Chief Editer</option>
                <option value="australia">Editer</option>
                <option value="australia">Compliment User</option>
            
             </select>
          
          <hr />

          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button type="submit" className="Cancle-btn">
              Cancle
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddNewUser