import React from 'react'
import './Form3.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Form3() {
    const navigate=useNavigate()

    const nextpage4=()=>{
        navigate('../form4')
    }
    const prevpage2=()=>{
        navigate('../form2')
    }
  return (
    <>
    <div className='page3'>
        <nav> 
          <h2 className='guard_heading'>Guardian/emergency Contact Information</h2>
        </nav>
        <hr className='guard_break'/>
         
            <div className=''>
                <div className="emergency_contact">
                    <div className='contact_data1'> 
                       <div className="cd_1 contact_name">
                        <span>Emergency name</span>
                         <input type="text" />
                       </div>
                       <div className="cd_1 contact_number">
                          <span>Emergency number</span>
                          <input type="number" />
                       </div>

                    </div>
                       <br />
                       <div className='contact_data2'>
                       <div className="cd_1 contact_email">
                           <span>Emergency email</span>
                           <input type="text" placeholder="example@email.com" />
                       </div>
                       <div className="cd_1 contact_relation">
                            <span>Relationship</span>
                            <input type="text" />
                       </div>
                       </div>
                   <div className="emergency_address ">                 
                   <Form.Group className="mb-3" controlId="formGridAddress1">
                               <Form.Label >Address</Form.Label>
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
                                 <Form.Control />

                               </Form.Group>
                               </Row>
                       
                               <Form.Group as={Col} controlId="formGridZip">
                                 <Form.Label>Zip</Form.Label>
                                 <Form.Control />
                               </Form.Group>
                   </div>             
                </div>
            </div>
         <hr />
         <div className="footer">
            <div className="btn_space left_btn">
                  <Button className='prev_btn' variant="secondary " onClick={prevpage2}>prev page </Button>
            </div>
    
               <div className="btn_space page_navigation">
                          <Button variant="primary m-3" onClick={nextpage4}>Next page</Button>
                          <Button variant="primary"> Save </Button>
            </div>

         </div>
    </div>
    </>
  )
}

export default Form3