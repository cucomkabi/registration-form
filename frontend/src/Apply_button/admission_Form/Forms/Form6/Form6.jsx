import React, { useRef, useState } from 'react'
import './Form6.css'
import ReactSignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





export default function Form6() {

       const sigCanvas6=useRef(null)
       const [form6_date,setform6_date]=useState("")
       const [form6signature,setform6signature]=useState("")
       const navigate=useNavigate()
   
       const prevpage5=()=>{
            navigate('../form5')
       }
 
         const handleSaveSignature6=()=>{
            if (sigCanvas6.current && !sigCanvas.current.isEmpty()) {
                const dataURL6 = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
                setform6signature(dataURL6); // Save signature data to state
                alert("Signature saved!");
              } else {
                alert("Please provide a signature first!");
              }
         }
        
         const handleClearSignature6 = () => {
            if (sigCanvas.current) {
              sigCanvas6.current.clear(); // Clear the canvas
              setform6signature(""); // Clear signature data in state
            }
          };
          

             const changebtn_save=()=>{
                
             }
             const changebtn_print=()=>{
                     window.print()
             } 






  return (
    <div className='form6_page'>
        <div className="nav_bar">
          <h2 className='text-center form6_nav'>Acceptance of Terms & Conditions and Declaration of Students, Parent or Guardian</h2>
          <hr className='form6_hrtag'/>
        </div>
       <div className="form6_pageinfo_div">
          <div className="cautioninfo">
            <h6>Declaration by Parents / Guardian</h6>
            <span>We are seeking admission for our daughter/son (hereinafter referred to as Child) in Smrti Academy (hereinafter referred to as School) after having read, understood and agreed with the terms and conditions below. We accept them and confirm that our acceptance has not been obtained by any kind of pressure or coercion of any nature whatsoever by the Management of the School. </span>
          </div>
       </div>
        <div className="page6info_instructions">
               <ol className='ordered_instructions'>
                <li className="instruction_list instruction_data1">This application has been made by us after having read and understood all the rules of the School.     </li>
                <li className="instruction_list instruction_data2">We declare that the information furnished by us in this application is true to the best of our knowledge and belief.
                </li>
                <li className="instruction_list instruction_data3">We fully understand that the admission to the school is based on merit and on availability of a seat at the time of scrutiny of our application and when we are called for the offer of a seat.
                </li>
                <li className="instruction_list instruction_data4">We understand the the admission being given to the child is provisional and the same may be cancelled should any of the statements made in this form is false or the relevant documents are not produced within the 7 days of filing this application unless a different timeline has been agreed up on with the School in writing.
                </li>
                <li className="instruction_list instruction_data5">We fully understand and accept that the fee is required to be paid on or before our child joins the School and thereafter each year before the commencement of the Academic Year or as and when demanded before the intimated due date. We also understand and accept that fees once paid, shall not be refunded under any circumstances by the School.
                </li>
                <li className="instruction_list instruction_data6">In the event of a fee payment cheque being dishonoured, the Management of the School reserves the right to dismiss/de-enroll the child at its discretion and levy any other penalty as it may deem fit.
                </li>
                <li className="instruction_list instruction_data7"> The School reserves the right to increase/ revise/amend the fee structure and/or the fee to be charged from time to time. These changes could be in line with changes in Government Policies and/or the economic situation (including, but not limited to, inflation, etc.).
                </li>
                <li className="instruction_list instruction_data8">We understand and accept that the School has the right to use our child's photograph for any publicity material, website, social media page/s, unless the same has been expressly objected to by us and intimated in writing to the School by us before the commencement of the Academic Year.
                </li>
                <li className="instruction_list instruction_data9"> We agree that our child will strictly follow the Dress Code of the School and wear the Uniform and Shoes as approved by the School.
                </li>
                <li className="instruction_list instruction_data10"> We understand and accept that our child may be expelled or removed from the School for non payment of dues, for any infringement of rules of conduct or if is caught using unfair means during an examination.
                </li>
                <li className="instruction_list instruction_data11"> We agree that our child will observe the rules relating to Library, the Laboratories, Identity Card and the Code of Conduct.
                </li>
                <li className="instruction_list instruction_data12">We understand that the School will require our child to create study material and other content from time to time as part of the learning process and that the School has the right to retain those materials.
                </li>
                <li className="instruction_list instruction_data13"> We agree that incase of withdrawal of our child from the school, fees for the subsequent quarter will have to be paid.
                </li>
                <li className="instruction_list instruction_data14"> We fully understand and agree that no document other than those required by the School will be entertained for pirority of admissions.
                </li>
                <li className="instruction_list instruction_data15"> We understand and agree that if our child is found to be differently abled, the School will find it difficult to handle the educational needs of the Child. In view of this and in the interest of the Child's future, the School will have the right to terminate the admission of the Child from the School.
                </li>
                <li className="instruction_list instruction_data16">By pressing the Submit Button, we confirm the above declaration and accept the terms and conditions.
                </li>
               </ol>


            </div>    
            
     <div className="form6_Datas">

         <div className="signature_form6">
            <div className="sig_pad">
            <span>Signature of student</span>
              <ReactSignatureCanvas
                penColor="black"
                ref={sigCanvas6}
                canvasProps={{
                  width: 300,
                  height: 150,
                  style: { border: "1px solid #ccc", backgroundColor: "white", borderRadius: "10px" },
                }}
              />
              <div className="save_clear">
                <button className="canvas_btn" onClick={handleSaveSignature6}>
                  Save
                </button>
                <button className="canvas_btn" onClick={handleClearSignature6}>
                  Clear
                </button>
              </div>
            </div>
          </div>
            <div className="date_inpt">
                <span  className='date_input_items' >Date of Signature</span>
                <input className='date_input_items' type="date" />
            </div>
            
            </div>
         
         <div className="text_Areas">
            <h4>Please ensure the following before submit the button</h4>
            <textarea className='form6_textarea' name="" id="" placeholder="Please fill all fields and ensure that you have printed the form before pressing the Submit Button."></textarea>
         </div>
         <hr className='form6_footerhrtag'/>
           <div className="form6_pagenav">
                <div className="left_nav">
                <Button variant="secondary m-3" onClick={prevpage5}>
                  Prev Page
                </Button>
                </div>
                <div className="right_nav">
                <Button variant="primary m-3" onClick={changebtn_save}> Save</Button>
                <Button variant="primary m-3" onClick={changebtn_print}> Print Form first</Button>
                </div>
           </div>
    </div>
  )
}
