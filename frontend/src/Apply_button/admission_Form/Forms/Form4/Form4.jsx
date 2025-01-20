import React from "react";
import FileUpload from "./FileUpload";
import './Form4.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";



function Form4() {

   const navigate=useNavigate()
         
   const nextpage5=()=>{
       navigate('../form5')
   }
   const prevpage3=()=>{
    navigate('../form3')
   }

  return (
    <div className="form4_page">
      <FileUpload label="Passport Copy" />
      <FileUpload label="Transcripts/Transfer Certificate" />
      <FileUpload label="Students Health Record" />
      <FileUpload label="Degree Certificates" />
      <FileUpload label="Personal Statement" />
      <FileUpload label="High School Diploma" />
      <FileUpload label="Police Clearance" />
      <FileUpload label="Others" />
         <div className="check_list">
          <h1 className="check_heading">CHECK LIST</h1>
            <p>Note: Your application will NOT be reviewed unless all the applicable sections are completely answered and include all required items.</p>
         </div>
            <hr className="check_list_hrtag" />
          <div className="closure">
            <label htmlFor="">Please enclose or forward the following items along with your application:*</label>
          </div>
          <div className="queries">
            <div className="datas dataquery1">
              <input type="checkbox" name="" id=""  />
              <label htmlFor="">Non – refundable application fee $200 USD</label>
            </div>
            <div className="datas dataquery2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Recent passport–size photos(Digital).</label>
            </div>
            <div className="datas dataquery3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Copy of Identification pages of your passport.</label>
            </div>
            <div className="datas dataquery4">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Health Certificate from a Licensed Medical Doctor.</label>
            </div>
            <div className="datas dataquery5">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Two Letters of Recommendation.</label>
            </div>
            <div className="datas dataquery6">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">The original copy of the police clearance/certificate of good conduct.</label>
            </div>
            <div className="datas dataquery7">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Personal Statement.</label>
            </div>
            <div className="datas dataquery8">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Scaled transcripts from undergraduate and/or graduate colleges in English.</label>
            </div>
            <div className="datas dataquery9">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Scaled transcripts from High School in English.</label>
            </div>
            <div className="datas dataquery10">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Copy of High School Diploma in English.</label>
            </div>
            <div className="datas dataquery11">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Copy of Degree certificates in English.</label>
            </div>
          </div>
          <hr className="checklist_closedhr" />
        <div className="page_nav">
          <div className="left">
          <Button variant="secondary m-3" onClick={prevpage3}>prev page </Button>
          </div>
          <div className="right_nav">
              <div className="next_page">
              <Button variant="primary m-3" onClick={nextpage5}>Next page </Button>
              </div>
              <div className="save">
              <Button variant="primary m-3"> Save </Button>
              </div>
          </div>
        </div>

    </div>
  );
}

export default Form4;
