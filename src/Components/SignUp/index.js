import React, { useState } from 'react'
import { Form, Row, Col, Container, NavLink} from 'react-bootstrap'
import './style.scss';

import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {useNavigate } from 'react-router-dom'
// import LogIn from '../LogIn'


import { rData } from '../Data/Data';


const SignUp = () => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    // const [rData, setRData]= useState([]);

    const [data, setData]= useState({
        email:"",
        fullName:"",
        userName:"",
        password:""
    });

    const inputEvent = (event) =>{
        const {value, name}= event.target;
        
        setData((preVal)=>{
            if(name==="Email"){
                return{
                    email: value,
                    fullName: preVal.fullName,
                    userName:preVal.userName,
                    password:preVal.password
                }
            } else if(name==="Name"){
                return{
                    email: preVal.email,
                    fullName: value,
                    userName:preVal.userName,
                    password:preVal.password
                }
            } else if(name==="uName"){
                return{
                    email: preVal.email,
                    fullName: preVal.fullName,
                    userName:value,
                    password:preVal.password
                }
            } else if(name==="Password"){
                return{
                    email: preVal.email,
                    fullName: preVal.fullName,
                    userName:preVal.userName,
                    password:value
                }
            }
        })
    }

    const onSubmit = (event) =>{
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);


        rData.push(data);
        console.log(rData);
        toast("You are registered successfully! 👍");
        // navigate("/LogIn");
    }

    

  return (
    <>
        <Container className='signUpContainer'>
                <div className='col col-xl-4 col-lg-5 col-md-6 col-sm-8 main_Div'>
                <div className='HEADING'>
                <div className="masood">
                        <span> 😄 </span>
                        <h5>Masood</h5>
                    </div>
                <div className="text">
                    {/* <p>Manage your freelance buisness with us!</p> */}
                    <p>Take less than 5 minutes to fill out all the information needed to register your buisness.</p>
                </div>
                </div>

        <Form noValidate validated={ validated } className=' mb-3 form'>
        <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextEmail">
                
                <Col sm="10" md="10" className='columns'>
                <Form.Control required minLength={12} onChange={inputEvent} value={data.email} name="Email" type="email" placeholder="Mobile number or email address " />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextEmail">
                
                <Col sm="10" md="10" className='columns'>
                <Form.Control required minLength={10} onChange={inputEvent} value={data.name} name="Name" type="text" placeholder="Full Name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextEmail">
                
                <Col sm="10" md="10" className='columns'>
                <Form.Control required minLength={8} onChange={inputEvent} value={data.userName} name="uName" type="text" placeholder="Username"/>
                </Col>
            </Form.Group>
           

            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextPassword">
                
                <Col sm="10" md="10" className='columns'>
                <Form.Control required minLength={6} onChange={inputEvent} value={data.password} name="Password" type="password" placeholder="Password"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 formGroup" controlId="formPlaintextPassword">

            
           
                
                <Col sm="10" md="10" className='columns'>
                <Form.Control className='btnSignUp' onClick={onSubmit} type="button" value="Sign Up"/>
                </Col>
            </Form.Group>

        </Form>

            <div  className='col col-xl-4 col-lg-5 col-md-6 col-sm-8 haveAnAccount'><p>Have an account?<NavLink to="/Login" className="NavLink" onClick={()=>{navigate("/LogIn")}}>Log in</NavLink></p></div>
                </div>
       
        


        
            

        
       


       
        
   </Container>
   

   
   </>
  )
}

export default SignUp
