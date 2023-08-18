import React, { useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'

const Checkout = () => {

  const totalQuantity = useSelector(state => state.cart.toalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing-form'>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Enter Your Name' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="email" placeholder='Enter Your Email' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="number" placeholder='Enter Your Contact' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Street Address' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Postal code' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout-cart">
                <h6>Total Quantity: <span>{totalQuantity} items</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6><span>Shipping: <br/>Free shipping</span><span> $0</span></h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className="shop-button w-100">Place order</button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout