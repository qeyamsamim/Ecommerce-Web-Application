import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import CustomerCare from '../assets/images/customer-service.jpg'

import '../styles/contact.css'

const Contact = () => {
  return (
    <Helmet title={'Home'}>
        <section className='contact-container'>
            <Container>
                <Row>
                    <Col lg='5'>
                        <div className="contact-text">
                            <div className="image-wrapper">
                                <img src={CustomerCare} />
                            </div>
                        </div>
                    </Col>
                    <Col lg='7'>
                        <div className="form-container">
                            <h2 className='mb-5'>Talk With Our Sales Team</h2>
                            <Form className='contact-form'>
                                <Row>
                                    <Col>
                                        <FormGroup className='form-group'>
                                            <input type="text" placeholder='Enter Your First Name' />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className='form-group'>
                                            <input type="text" placeholder='Enter Your Last Name' />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup className='form-group'>
                                            <input type="email" placeholder='Enter Your Email' />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className='form-group'>
                                            <input type="text" placeholder='Enter Your Contact Number' />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <FormGroup className='form-group'>
                                        <textarea type="text" rows='6' placeholder='Your Message...' />
                                    </FormGroup>
                                </Row>
                            </Form>
                            <motion.button whileTap={{ scale: 1.2 }} className="shop-button">
                                <span>Send</span> <i className="ri-send-plane-fill"></i>
                            </motion.button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Contact