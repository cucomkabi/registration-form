import React, { useRef, useState } from 'react';
import './Form5.css';
import ReactSignatureCanvas from 'react-signature-canvas';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Form5() {
  const sigCanvas = useRef(null); // Initialize the reference

  const [formData, setFormData] = useState({
    filledByYou: '', // For the Yes/No/Others question
    agreementName: '', // Name input
    agreementContact: '', // Contact input
    agreeTo: false, // Agree checkbox
    signatureData: '', // Signature data
  });

  const navigate = useNavigate();

  const prevpage4 = () => {
    navigate('../form4');
  };

  const nextpage6 = () => {
    navigate('../form6');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox and text inputs differently
    }));
  };

  const handleSaveSignature = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData((prevData) => ({ ...prevData, signatureData: dataURL })); // Save signature data to state
      alert("Signature saved!");
    } else {
      alert("Please provide a signature first!");
    }
  };

  const handleClearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear(); // Clear the canvas
      setFormData((prevData) => ({ ...prevData, signatureData: '' })); // Clear signature data in state
    }
  };

  return (
    <div>
      <div className="form6_inputs">
        <h1 className="students_agreement_nav text-center">STUDENT AGREEMENT</h1>
        <hr className="students_agreement_navhr" />
        <div className="students_agreement_query">
          <label htmlFor="">Is this application filled by you?</label>
          <div className="query_flexform5">
            <div>
              <input
                type="checkbox"
                name="filledByYou"
                value="Yes"
                checked={formData.filledByYou === 'Yes'}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="filledByYou"
                value="No"
                checked={formData.filledByYou === 'No'}
                onChange={handleInputChange}
              />
              <span>No</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="filledByYou"
                value="Others"
                checked={formData.filledByYou === 'Others'}
                onChange={handleInputChange}
              />
              <span>Others</span>
            </div>
          </div>
          <div className="agreement_details">
            <div className="agreement_details_name">
              <label htmlFor="agreement_name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="agreement_name"
                name="agreementName"
                value={formData.agreementName}
                onChange={handleInputChange}
              />
              <span>If "NO" Mention the person who filled the application on behalf.</span>
            </div>
            <div className="agreement_details_contact">
              <label htmlFor="agreement_contact">Contact/Email</label>
              <input
                type="text"
                placeholder="Contact"
                id="agreement_contact"
                name="agreementContact"
                value={formData.agreementContact}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="agree_btn">
            <label htmlFor="">Agree To</label>
            <div className="select_agreement">
              <input
                className="agree_toggle"
                type="checkbox"
                name="agreeTo"
                checked={formData.agreeTo}
                onChange={handleInputChange}
              />
              <span>
                COMMONWEALTH UNIVERSITY COLLEGE OF MEDICINE is committed to providing a drug–free environment.
                Because of those commitments CUCOM expects each student to remain drug–free i.e. abstaining from the use
                of illegal drugs, alcoholic beverages, tobacco and prescription medicines. The manufacture, possession,
                distribution or use of illegal drugs, alcohol or tobacco is strictly prohibited. I certify that the
                information given in this application is true and correct to the best of my knowledge. I recognize that
                withholding or misrepresenting information may result in the cancellation of my acceptance. By my
                signature, I pledge to adhere to and respect the Principles and Regulation of COMMONWEALTH UNIVERSITY
                COLLEGE OF MEDICINE, as stated in the Academic Bulletin in the Substance Abuse Policy.
              </span>
            </div>
          </div>
          <div className="signature">
            <span>Signature of student</span>
            <div className="sig_pad">
              <ReactSignatureCanvas
                penColor="black"
                ref={sigCanvas}
                canvasProps={{
                  width: 300,
                  height: 150,
                  style: { border: "1px solid #ccc", backgroundColor: "white", borderRadius: "10px" },
                }}
              />
              <div className="save_clear">
                <button className="canvas_btn" onClick={handleSaveSignature}>
                  Save
                </button>
                <button className="canvas_btn" onClick={handleClearSignature}>
                  Clear
                </button>
              </div>
            </div>
          </div>
          
          <hr className='agreement_footerhrtag' />
          <div className="footer_studentagreement">
            <div className="page_nav">
              <div className="left">
                <Button variant="secondary m-3" onClick={prevpage4}>
                  Prev Page
                </Button>
              </div>
              <div className="right_nav">
                  <Button variant="primary m-3" onClick={nextpage6}>Next Page</Button>
                
                  <Button variant="primary m-3" onClick={() => console.log('Form Data:', formData)}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
