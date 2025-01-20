import React, { useEffect, useState } from 'react'
import './Form1.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import countries from '../countries.json'
import { useNavigate } from 'react-router-dom'

export default function Form1() 
 {

  const navigate=useNavigate()
  var nextpage2=()=>{
     navigate('/form2')
  }
   const prevpage1=()=>{
    navigate('../Admission')
   }

  const [nationalitySearch, setNationalitySearch] = useState("");
  const [filteredNationalityCountries, setFilteredNationalityCountries] = useState([]);
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);

  const [citizenshipSearch, setCitizenshipSearch] = useState("");
  const [filteredCitizenshipCountries, setFilteredCitizenshipCountries] = useState([]);
  const [showCitizenshipDropdown, setShowCitizenshipDropdown] = useState(false);

  // Handle nationality input
  useEffect(() => {
    if (nationalitySearch.trim() === "") {
      setFilteredNationalityCountries([]);
      setShowNationalityDropdown(false);
      return;
    }

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(nationalitySearch.toLowerCase())
    );

    setFilteredNationalityCountries(filtered);
    setShowNationalityDropdown(filtered.length > 0);
  }, [nationalitySearch]);

  // Handle citizenship input
  useEffect(() => {
    if (citizenshipSearch.trim() === "") {
      setFilteredCitizenshipCountries([]);
      setShowCitizenshipDropdown(false);
      return;
    }

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(citizenshipSearch.toLowerCase())
    );

    setFilteredCitizenshipCountries(filtered);
    setShowCitizenshipDropdown(filtered.length > 0);
  }, [citizenshipSearch]);

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".autocomplete")) {
        setShowNationalityDropdown(false);
        setShowCitizenshipDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNationalitySelect = (country) => {
    setNationalitySearch(country);
    setShowNationalityDropdown(false);
  };

  const handleCitizenshipSelect = (country) => {
    setCitizenshipSearch(country);
    setShowCitizenshipDropdown(false);
  };

    

  return (
    <>
    <div>
        <h1 className='text-center page1heading' >PERSONAL INFORMATION</h1>
        <hr className='border-primary w-* page1_hr'/>
    </div>
        <div className="data_fields">
            <div className="flex_data">
                <div className="rowdata">
                               <div className="d1 std_img">
                                    <span className='mx-3 my-3'> student photography</span>
                                        <input className='mx-3' type="file" value={''}/>
                               </div>
                               <div className="d1 date_of_applying">
                                       <label htmlFor="application-date">Date of applying</label>
                                       <input type="date" id="application-date" name="application_date" />
                               </div>

                </div>

                <div className="rowdata ">
                    <div className="d2 entering_year ">
                        <label htmlFor="year">Entering Year</label>
                        <input type="number" />
                    </div>
                     <div className="d2 entering_session">
                        <label htmlFor="">Entering Session</label>
                        <Form.Select aria-label="Default select example">
                        <option>Please select month </option>
                                 <option value="1">JANUARY</option>
                                 <option value="2">MAY</option>
                                 <option value="3">SEPTEMBER</option>
                              </Form.Select>
                     </div>
                </div>

                <div className="rowdata">
                       <label className='name_label' htmlFor="">STUDENT</label>
                       <InputGroup className="mb-3 mx-3 ">
                           <InputGroup.Text >First, Middle, and Last Name</InputGroup.Text>
                           <Form.Control aria-label="First name" />
                           <Form.Control aria-label="Middle name" />
                           <Form.Control aria-label="Last name" />
                         </InputGroup>
                </div>

                <div className="rowdata">
                                <div className="d3 date_of_birth">
                                       <label htmlFor="application-date">Date of birth</label>
                                       <input type="date" id="application-date" name="application_date" />
                                 </div>
                                 <div className="d3 city">
                                    <label htmlFor="">City/State/Country of birth</label>
                                    <input type="text"/>
                                 </div>
                </div>

                 <div className="rowdata">
                    <div className="d4 gender">
                        <label   htmlFor="">Gender</label>
                        <Form.Select aria-label="Default select example" className='mt-n9 mx-3 w-50'>
                        <option>Please select Gender </option>
                                 <option value="1">Male</option>
                                 <option value="2">Female</option>
                                 <option value="3">Others</option>
                         </Form.Select>
                    </div>
                    <div className="d4 nationality"> 
                    <div className="autocomplete">
            <label htmlFor="nationality-search">Nationality</label>
            <input
              type="text"
              id="nationality-search"
              placeholder="Search for a country"
              value={nationalitySearch}
              onChange={(e) => setNationalitySearch(e.target.value)}
              onFocus={() => setShowNationalityDropdown(filteredNationalityCountries.length > 0)}
            />
            {showNationalityDropdown && (
              <ul>
                {filteredNationalityCountries.map((country, index) => (
                  <li key={index} onClick={() => handleNationalitySelect(country)}>
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

                    </div>
                      <div className="d4 SSN_id">
                      <label htmlFor="">SSN (US)/National ID number</label>
                      <input type="text"/>
                      </div>
                 </div>
                <div className=" d5input">
                  <label className='d5_label' htmlFor="">Citizenship Status</label>
                       <div className="d5 citizenship_status">                          
                                    <div className="citizen_input">
                                      <input type="text" placeholder="Given name" />
                                      <label htmlFor="">Name</label>
                                    </div>
                           
                                     <div className="citizen_input">
                                      <input type="text" placeholder="" />
                                      <label htmlFor="">Permanent Resident</label>
                                    </div>

                                    <div className="citizen_input">
                                      <input type="text" placeholder="Family or Surname" />
                                      <label htmlFor="">Allen Reg</label>
                                    </div>
                                    <div className="citizen_input">
                                      <input type="text" placeholder="" />
                                      <label htmlFor="">Visa Type</label>
                                    </div>
                       </div>             
                  </div>
                       <div className="citizen_disclaimer">
                  <h6 className='citizenship_info'>Country of Citizenship if not a US citizenship :</h6>                

                       </div>
              <div className="rowdata d_6">
              <div className="autocomplete d6_inputs">
                  <label htmlFor="citizenship-search">Citizenship</label>
                  <input
                    type="text"
                    id="citizenship-search"
                    placeholder="Search for a country"
                    value={citizenshipSearch}
                    onChange={(e) => setCitizenshipSearch(e.target.value)}
                    onFocus={() => setShowCitizenshipDropdown(filteredCitizenshipCountries.length > 0)}
                  />
            {showCitizenshipDropdown && (
              <ul>
                {filteredCitizenshipCountries.map((country, index) => (
                  <li key={index} onClick={() => handleCitizenshipSelect(country)}>
                    {country}
                  </li>
                ))}
              </ul>
            )}
             </div>
                <div className="date_of_entry">
                  <label htmlFor="">Date of entry in US</label>
                  <input type="date" name="" id="" />
                </div>
              
              </div>
                
                <div className="rowdata d_7">
                         <div className="address">
                           <h6>Student address :</h6>
                         </div>
                  <div className="students_citizenship_details">
                  <Form>
                             <Row className="mb-3">
                               <Form.Group as={Col} controlId="formGridEmail">
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" placeholder="Enter email" />
                               </Form.Group>

                               <Form.Group as={Col} controlId="formGridPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" placeholder="Password" />
                               </Form.Group>
                             </Row>
                       
                             <Form.Group className="mb-3" controlId="formGridAddress1">
                               <Form.Label>Address</Form.Label>
                               <Form.Control placeholder="1234 Main St" />
                             </Form.Group>
                       
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                               <Form.Label>Address 2</Form.Label>
                               <Form.Control placeholder="Apartment, studio, or floor" />
                             </Form.Group>
                       
                             <Row className="mb-3 ">
                               <Form.Group as={Col} controlId="formGridCity">
                                 <Form.Label>City</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                       
                               <Form.Group as={Col} controlId="formGridState">
                                 <Form.Label>State</Form.Label>
                                 <Form.Select defaultValue="Choose...">
                                   <option>Choose...</option>
                                   <option>...</option>
                                 </Form.Select>
                               </Form.Group>
                       
                               <Form.Group as={Col} controlId="formGridZip">
                                 <Form.Label>Zip</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                             </Row> 
                           </Form>
                         </div>
                </div>

                   <div className="rowdata da_8">
                  
                        <div className="permanent_Address">
                          <input type="checkbox" name="" id="" />
                          <h6 className='same_address'>Permanent Address if different from other </h6>
                        </div>

                 

                        <div className="same_citizenship_details">
                       <Form>
                             <Row className="mb-3">
                               <Form.Group as={Col} controlId="formGridEmail">
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" placeholder="Enter email" />
                               </Form.Group>
                       
                               <Form.Group as={Col} controlId="formGridPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" placeholder="Password" />
                               </Form.Group>
                             </Row>
                       
                             <Form.Group className="mb-3" controlId="formGridAddress1">
                               <Form.Label>Address</Form.Label>
                               <Form.Control placeholder="1234 Main St" />
                             </Form.Group>
                       
                             <Form.Group className="mb-3" controlId="formGridAddress2">
                               <Form.Label>Address 2</Form.Label>
                               <Form.Control placeholder="Apartment, studio, or floor" />
                             </Form.Group>
                       
                             <Row className="mb-3">
                               <Form.Group as={Col} controlId="formGridCity">
                                 <Form.Label>City</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                       
                               <Form.Group as={Col} controlId="formGridState">
                                 <Form.Label>State</Form.Label>
                                 <Form.Select defaultValue="Choose...">
                                   <option>Choose...</option>
                                   <option>...</option>
                                 </Form.Select>
                               </Form.Group>
                       
                               <Form.Group as={Col} controlId="formGridZip">
                                 <Form.Label>Zip</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                             </Row> 
                           </Form>
                       </div>

                   </div>

                   <hr />
                   <div className="form1_pagenav">
                    <div className="left_nav">
                    <Button variant="secondary m-3" onClick={prevpage1}>Prev page </Button>
                    </div>
                    <div className="right_nav">
                   <Button variant="primary m-3" onClick={nextpage2}>Next page </Button>
                   <Button variant="primary m-3"> Save </Button>

                    </div>
                   </div>
            </div>       
        </div>

    </>
  )
}
