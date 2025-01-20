import React from 'react'
import './Admission.css'
import logo from './logo.png'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


function Admission() {
     const navigate=useNavigate()
     const nextpage1=()=>{
        navigate('/form1')
     }


  return (
    <>
    <div className="instructions">
      <div className="logo_nav">
                <div className="logo">
                    <img src={logo} alt="logo" /> 
                </div>
                <div className="college_name">
                <h2 className='text-center'>COMMONWEALTH UNIVERSITY COLLEGE OF MEDICINE   </h2> 
                </div>
      </div>
      <div className="program_name">
        <h1 className='admission_hrtag'>Accelerated MD Program Admission Form
        <p className='instructionpage_ptag'>We thank you for starting your journey with us.</p>
        </h1>
      </div>
        <div className="school_norms">
               <h4>Instructions for filling in the Application Form</h4>
             <a href="">All Fields are compulsory. If it is not applicable, please fill as "Not Applicable"</a>

             <h4>Step 1: Fill in the details</h4>
              <ul className='instruction_list' ><li >
              Enter all relevant details carefully. Data Once Submitted can not be changed. So Please take a look before final Submission.</li>
              <li>Keep Ready a scanned color copy of Student's Photo in jpg/jpeg format</li>
              <li>Take a Printout of the Application form before pressing the Submit Button. You can sign the hard copy of the application form and submit it along with copies of the documents</li>
              <li>All copies of documents should be self-attested.</li>
              <li>The original documents should be brought to the school for verification and return if necessary.</li>
              <li>The original transfer certificate from the current school (where applicable) will be retained by the School</li>
              </ul>
              <h4>Step 2: Confirmation of Submission</h4>
              <ul className='instruction_list'>
                <li>Press the Submit Button after completing the application form.</li>
                <li>After Successfull Submission of Application Form, you will get a confirmation message on screen.</li>
                <li>Attach all the relavent documents with Printed Application Form, Sign the Form and submit the documents in the Admissions Office.</li>
                <li>Next step you are called by the School for a Student Assessment Interview.</li>
                <li>Once you are accepted you will receive an acceptance letter from Admissions Office.</li>
                <li>Any queries feel free to reach out at Admission@cucom.org,Admin@cucom.org.</li>
              </ul>
         </div>
         <hr />
         <div className="page1_nav">
         <Button variant="primary m-3" onClick={nextpage1}>Next page </Button>
         <Button variant="primary m-3"> Save </Button>
     
         </div>
    </div>
    
    </>
  )
}

export default Admission