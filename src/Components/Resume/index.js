import React from 'react'
import './style.scss';
import Education from '../Education';
import { Nav, Col, Row } from 'react-bootstrap';
const Resume = () => {
  return (
    <div className='Resume'>
          <div className='Heading'>
          <h3>Resume</h3>
          <p>My Formal Bio Details</p>
          </div>


          <Row className='ResumeRow shadow'>
          <Col lg={2} md={3} sm={3} xs={4} id="list-example" className="list-group">
          <ul>
          <h4>Skills</h4>
              <li>html5</li>
              <li>css3</li>
              <li>SaaS</li>
              <li>javaScript</li>
              <li>reactjs</li>
          </ul>

          <ul>
          <h4>Skills</h4>
              <li>html5</li>
              <li>css3</li>
              <li>SaaS</li>
              <li>javaScript</li>
              <li>reactjs</li>
          </ul>

          <ul>
          <h4>Skills</h4>
              <li>html5</li>
              <li>css3</li>
              <li>SaaS</li>
              <li>javaScript</li>
              <li>reactjs</li>
          </ul>
          
          </Col>

          <Col lg={10} md={9} sm={9} xs={8}>
            <Education/>

          
          </Col>
          </Row>

       </div>
  )
}

export default Resume
