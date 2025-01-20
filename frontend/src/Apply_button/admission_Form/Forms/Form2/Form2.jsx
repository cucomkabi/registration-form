import React, { useState } from "react";
import "./Form2.css";
import countries from "../countries.json";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'


function Form2() {
  const [handleinfo, sethandleinfo] = useState("");
  const [filteredcountries, setfilteredcountries] = useState([]);
  const [showdropdown, setdropdown] = useState(false);

  const [formData, setFormData] = useState({
    personalStatement: "",
    securityQuestion1: "",
    securityQuestion2: "",
  });
   const navigate=useNavigate()
   
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleinformation = (e) => {
    const value = e.target.value;
    sethandleinfo(value);

    if (value.trim()) {
      const results = countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setfilteredcountries(results);
      setdropdown(true);
    } else {
      setfilteredcountries([]);
      setdropdown(false);
    }
  };

  const handleSave = () => {
    alert("Form data saved successfully!");
    console.log("Saved Data:", formData);
  };

  const handleNext = () => {
    navigate('/form3')
  };

  const handleBack = () => {
    navigate('/form1')
  };

  return (
    <>
      <div className="form2_page">
        <div className="nav_title">
          <h1 className="page2_heading">Student Academic Record</h1>
          <hr className="page2_hr" />
        </div>

        <div className="form2_datas">
          <div>
            <h5 className="School_info">High School Information</h5>
            <hr className="datas_hr" />
          </div>

          <div className="rowdata d_8">
            <label htmlFor="schoolName">Name of the School</label>
            <input className="schl_name" id="schoolName" type="text" />
          </div>

          <div className="rowdata d_9">
            <div className="data_d9">
              <label htmlFor="dateFrom">Date Attended From</label>
              <input type="date" id="dateFrom" />
            </div>
            <div className="data_d9">
              <label htmlFor="dateTo">Date Attended To</label>
              <input type="date" id="dateTo" />
            </div>
          </div>

          <div className="rowdata d_10">
            <div className="Schoolinfo_label">
              <label className="d_10label" htmlFor="schoolAddress">
                School Address
              </label>
            </div>
            <div className="full_details">
              <div className="details_container city">
                <label htmlFor="city">City</label>
                <input id="city" type="text" />
              </div>
              <div className="details_container state">
                <label htmlFor="state">State</label>
                <input id="state" type="text" />
              </div>
              <div className="details_container postal_code">
                <label htmlFor="postalCode">Postal Code</label>
                <input id="postalCode" type="number" />
              </div>
              <div className="details_container autocomplete">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  value={handleinfo}
                  onChange={handleinformation}
                />
                {showdropdown && filteredcountries.length > 0 && (
                  <ul className="dropdown-list">
                    {filteredcountries.map((country, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          sethandleinfo(country);
                          setdropdown(false);
                        }}
                        className="dropdown-item"
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Previous Institutions Table */}
          <div className="rowdata d_17">
            <div className="table-container">
              <h5>Previous Institutions/Colleges/Universities Attended</h5>
              <table className="institutions-table">
                <thead>
                  <tr>
                    <th>Institution Name</th>
                    <th>City</th>
                    <th>State/Country</th>
                    <th>Dates Attended</th>
                    <th>Credits Earned</th>
                    <th>Major</th>
                    <th>Degree Earned</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr key={index}>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                      <td><input type="text" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Personal Statement Section */}
          <div style={{ width: "50%", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <h2>Personal Statement</h2>
            <textarea
              name="personalStatement"
              placeholder="Type your personal statement..."
              value={formData.personalStatement}
              onChange={handleInputChange}
              style={{ width: "100%", height: "150px", marginBottom: "20px",borderRadius:"10px",padding:"10px" }}
              required
            />
            <p>Type your personal statement.Your statement represents your opportunity to communicate to the Admissions Committee anything that you feel is important for the Committee to know about you that might not be sufficiently covered by this application.This information would give the Committee greater insight about the applicant’s unique qualifications, experiences and aspirations.</p>
          </div>
          <hr />
          <div className="rowdata d_18">
                 {/* campus security */}
          <h3 className="cam_heading">Campus security</h3>
          <div className="campus_details_query">
                <label>Have you ever been convicted or pleaded guilty to any criminal or military offense, excluding minor traffic violations?       </label>
              <div className="campusquery_1">
                <div>
                <input type="radio" name="" id="" /><span className="sp_input" >Yes</span>
                </div>
                <div>
                <input type="radio" name="" id="" /><span className="sp_input">No</span>
             </div>
              </div>
              <div className="campusquery_2">
                <label>Have you ever been academically dismissed from/ declared ineligible to attend/ incurred disciplinary action by any previous institution? Consistent with Federal Campus Security Act. If you answer “yes” to either, please attach a letter of explanation.*      </label>
                <input type="radio" name="" id="" /><span className="sp_input">Yes</span>
                <input type="radio" name="" id="" /><span className="sp_input">No</span>
              </div>
              
          </div>

          </div>


          <div className="form2_page_nav">
            <div className="left">
            <Button onClick={handleBack} variant="secondary m-3">
              Back
            </Button>
            </div>

            <div className="right_nav">
            <Button onClick={handleSave} variant="primary m-3">
              Save
            </Button>
            <Button onClick={handleNext} variant="primary m-3">
              Next
            </Button>
            </div>
          </div>
          

         


        </div>
      </div>
    </>
  );
}

export default Form2;
