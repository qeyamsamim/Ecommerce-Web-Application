import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'

const Signup = () => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='5' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='auth-form'>
                <FormGroup className='form-group'>
                  <input 
                    type="text" 
                    placeholder='Name'
                    value={name}
                    onChange={e => setName(e.target.value)} />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input 
                    type="number" 
                    placeholder='Contact number'
                    value={contact}
                    onChange={e => setContact(e.target.value)} />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input 
                    type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input 
                    type="password" 
                    placeholder='Confrim Password' />
                </FormGroup>
                <button type='submit' className="shop-button login-button">Register</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup