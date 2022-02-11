import React, { useState } from 'react'
import { Form, Row, Col, Container, NavLink } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'
import './style.scss';
import {toast } from 'react-toastify';
import { rData } from '../Data/Data';

const LogIn = () => {
  let navigate = useNavigate();

//   const [sData, setSData]= useState("");

  const [validated, setValidated] = useState(false);



  const onSubmit = (event) =>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

      rData.map((curElem)=>{
          if(curElem.email && curElem.password){
            //  curElem.fetch(rData);
             console.log(curElem.email);
              
          }else {
              return(
                  console.log("stack is empty")
              )
          }
      })

        // toast("you are logged in successfully");
        // navigate("/Home");

    }
          
  return (
    <Container fluid className='LogInContainer'>
        <div as={Row} className="p-5">
        
        <Form noValidate validated={ validated } className='col mb-1 loginForm col-xl-4 col-lg-5 col-md-6 col-sm-8' >
        <h3 className='text-center mb-5'>Log in form</h3>
        <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextEmail">
                
                <Col sm="10" className='columns'>
                <Form.Control required minLength={12} className='bg-light' type="email" placeholder="Mobile number or email address " />
                </Col>
            </Form.Group>
            
           

            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextPassword">
                
                <Col sm="10" className='columns'>

                <Form.Control minLength={6} required className='bg-light' type="password" placeholder="Password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextButton">
                
                <Col sm="10" className='columns'>
                <Form.Control className='bg-light btn' type="button" onClick={onSubmit} value="Log In"/>
                </Col>
            </Form.Group>
        </Form>


        <div className='col dHaveAnAccount col-xl-4 col-lg-5 col-md-6 col-sm-8'>
            {/* <div></div> */}
            <p>Don't have an account?<NavLink to="/SignUp" className="NavLink" onClick={()=>{navigate("/SignUp")}}>Sign Up</NavLink></p>
        </div>

        </div>
        
        
   </Container>
  )
}

export default LogIn
