import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './style.scss';
import cardsData from './cardsData';

const Testimonial = () => {

    const renderData = (props)=>{
        return(
            <Card style={{ width: '20rem' }} className="shadow Cards">
            <Card.Body>
                <Card.Text>{props.text}</Card.Text>
                <div className='d-flex align-items-center gap-2'> 
                    <div className='rounded-circle Image'></div>
                    <div>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    </div>
                </div>
                
                
               
            </Card.Body>
        </Card>
        )}

  return (
    <Container fluid className='main_Container'>
        <h3>Testimonials</h3>
        <p>What My Client Say About Me</p>
       <Container className='row cardsContainer'>{cardsData.map(renderData)}</Container>
      
    </Container>
  )
}

export default Testimonial
