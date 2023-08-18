import React, { useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import './Header.css'

import { useSelector } from 'react-redux'

const navLinks = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
  {
    path: 'contact',
    display: 'Contact'
  },
  {
    path: 'about',
    display: 'About'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active-menu')

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <Link className="logo" to='home'>
              <span className='logo-size'>
                <i className="ri-shopping-cart-2-fill"></i>
              </span>
              <div>
                <h1>Online Shopping</h1>
                {/* <p>some text here</p> */}
              </div>
            </Link>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  navLinks.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink to={item.path} className={(navClass) => 
                        navClass.isActive ? 'nav-active' : ''
                      }>{item.display}</NavLink>
                    </li>
                  ))
                }
                
              </ul>
            </div>
            <div className="nav-icons">   
              <span className="fav-icon">
                <i className="ri-heart-line"></i>
                <span className="icon-badge">0</span>
              </span>
              <span className="cart-icon" onClick={navigateToCart}>
                <i className="ri-shopping-cart-2-fill"></i>
                <span className="icon-badge">{totalQuantity}</span>
              </span>
              <span className="user-icon">
                <i className="ri-user-fill"></i>
              </span>
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header