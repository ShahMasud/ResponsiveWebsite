import React from 'react';
import './style.scss';
import { Col, Container, Row, Button, Nav } from 'react-bootstrap';
import img from '../../Assets/Images/masood.jpg'


import Resume from '../Resume';
import Testimonial from '../Testimonial';


const About = () => {
  return (
    <>
      <Container fluid className='aboutContainer'>
       <div className=' main_Div'>
            <h3>About Me</h3>
            <p>Why choose Me</p>

        <Row className='Row row-cols-auto'>
          <Col className='columns column' lg={4} md={4} sm={6} xs={8} >
          <img src={img} alt=""/>

          </Col>
          <Col className='columns' lg={4} md={6} sm={6} xs={8}>
          
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Natus sit hic suscipit deserunt,
             dolorum aperiam! Consequuntur magnam eveniet dicta officiis Natus sit hic suscipit deserunt,
             dolorum aperiam! Consequuntur magnam eveniet dicta officiis.</p>

             <div className='list'>
             <p>Here are a few highlights</p>
               {/* <ul> */}
                 <li>React js developer</li>
                 <li>React js developer</li>
                 <li>React js developer</li>
                 <li>React js developer</li>
                 <li>React js developer</li>
               {/* </ul> */}
             </div>

             <Button size="lg" active>
              Contact Me
              </Button>{' '}
              <Button size="lg" active>
              Get resume
             </Button>
          

          </Col>

        </Row>
        <Resume/>
      <Testimonial/>

        
       
       </div>
       
      

       
       
      </Container>
     
      
      </>
  )
};

export default About;
