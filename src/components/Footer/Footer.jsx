import React from 'react'
import './Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navItem = [
    {
      title: 'Shop',
      link: 'shop'
    },
    {
      title: 'Cart',
      link: 'cart'
    },
    {
      title: 'Login',
      link: '',
    },
    {
      title: 'Privacy',
      link: ''
    }
  ]
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='6' className='mb-4'>
            <Link className="logo" to='home'>
              <span className='logo-size'>
                <i className="ri-shopping-cart-2-fill"></i>
              </span>
              <div>
                <h1>Online Shopping</h1>
              </div>
            </Link>
            <p className="footer-text">
              Welcome to this Online Shopping platform, your ultimate destination for fashionable clothing and accessories. 
              With a curated collection of the latest trends and timeless classics, we aim to provide a seamless and enjoyable 
              shopping experience for fashion enthusiasts worldwide. 
            </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 py-1 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 py-1 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 py-1 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 py-1 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                {
                  navItem.map(({ title, link }, index) => (
                    <ListGroupItem className='ps-0 py-1 border-0' key={index}>
                      <Link to={link}>{title}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
         <Col lg='3' md='8'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='p-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-fill"></i></span>
                  <p className='mb-0'>123 Abcd street, City, Country</p>
                </ListGroupItem>
                <ListGroupItem className='p-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-fill"></i></span>
                  <p className='mb-0'>+991234567890</p>
                </ListGroupItem>
                <ListGroupItem className='p-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-fill"></i></span>
                  <p className='mb-0'>contact@onlineshopping.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer-copyright">Improve Your Ecommerce Business - Copyright© {currentYear}</p>
            <h6>Ahmad Samim Qeyam <a href='https://github.com/qeyamsamim' target='_blank'><i className="ri-github-fill"></i></a></h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer