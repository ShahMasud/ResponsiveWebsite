import React from 'react'
import './style.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
  return (
    
   <Container fluid className='main_Container'>
   <Row className='Title'>
   
   <Col lg={5} md={6} sm={12} className='textDiv'>
   <h6>Hello! I'm <span>Shah Masood</span> </h6>
   <h3>ReactJs Developer 💯</h3>
   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam earum. </p>

   
  <Button size="lg" active>
    Contact Me
  </Button>{' '}
  <Button size="lg" active>
    Get resume
  </Button>
   </Col>

    <Col lg={4} md={6} sm={12} className='Selenophile'>
     <div className='rounded-circle'></div>
   </Col>


   </Row>
   
    
   </Container>
      
    
  )
}

export default Home;
