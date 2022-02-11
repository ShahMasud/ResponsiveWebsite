import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './style.scss';

const Education = () => {
  return (
   <>
     <Row>
       <Col lg={6} md={6} sm={12} xs={12}>
       <div className='Data'>
     <div className='About'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
      </div>
      <div className='About'>
      <h3> Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
    </div>
    <div className='About'>
      <h3> Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
    </div>
     </div>
       </Col>

       <Col lg={6} md={6} sm={12} xs={12}>
       <div className='Data'>
     <div className='About'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
      </div>
      <div className='About'>
      <h3> Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
    </div>
    <div className='About'>
      <h3> Education</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus quod neque?</p>
    </div>
     </div>
       </Col>
       
     </Row>
   </>
   
  )
}

export default Education