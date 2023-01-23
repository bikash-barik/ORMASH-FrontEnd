import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const ImportantLink = ({ dispatch }) => {
const history = useHistory();

const AddImportantLink = () => {
    history.push("/hub/AddImportantLink");
};

// const UpdatetheLinks = () =>{
//   alert("Please select a record!")
// }
return (
    <div>
    <form action="">
        <div class="">
        <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Important Link
        </h3>
        <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
            <div className="btn-position">
                <button
                type="submit"
                className="btn-coupon-free"
                onClick={AddImportantLink}
                >
                Add Important Link
                </button>
            </div>
            </div>
        </div>

        <div class="text-center coupon-data mobileresponsive">
            <Table
            striped
            bordered
            hover
            responsive
            className="border rounded text-center mt-5"
            >
            <thead>
                <tr>
                <th className="p-2"></th>
                <th className="p-2">Sl.# </th>
                <th className="p-2">Important Link	</th>
                <th className="p-2"> URL</th>
                
                <th className="p-2">Created on</th>
                <th className="p-2"> Edit</th>
                </tr>
            </thead>
            <tbody className="">
                <tr className="">
                <td className="p-5">
                    <Form.Check aria-label="option 1" />
                </td>
                <th className="p-5">1</th>
                <td className="p-5">
                Mayur Shilpa- Crafts of ORMAS	
                </td>
                <td className="p-5">
                http://www.mayurshilpacraft.com
                </td>
                <td className="p-5"> 19-Oct-2019</td>
               
                <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                </td>
                </tr>
                <tr>
                <td className="p-5">
                    <Form.Check aria-label="option 1" />
                </td>
                <th className="p-5">2</th>
                <td className="p-5">
                Mayur Shilpa- Crafts of ORMAS	
                </td>
                <td className="p-5">
                http://www.mayurshilpacraft.com
                </td>
                <td className="p-5"> 19-Oct-2019</td>
                <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                </td>
                </tr>

                <tr>
                <td className="p-5">
                    <Form.Check aria-label="option 1" />
                </td>
                <th className="p-5">3</th>
                <td className="p-5">
                Mayur Shilpa- Crafts of ORMAS	
                </td>
                <td className="p-5">
                http://www.mayurshilpacraft.com
                </td>
                <td className="p-5"> 19-Oct-2019</td>
                <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                </td>
                </tr>
            </tbody>
            </Table>
        </div>

        <div className="btn-row">
            <div className="col-md-8">
            <div className="ShowEntries">
                <p className="Entries">Showing 0 to 1 of 10 entries</p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                Back
                </button>
                <button type="submit" className="btn-Next">
                Next
                </button>
            </div>
            </div>
        </div>
        </div>
    </form>
    </div>
);
};

export default ImportantLink;
