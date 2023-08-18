import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'

import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'
import '../styles/home.css'
import Services from '../services/Services'
import products from '../assets/data/products'
import Clock from '../components/UI/Clock'
import counterImage from '../assets/images/women-dress-06.png'
import homeImage from '../assets/images/afghan-women-dress-home.png'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    window.scrollTo(0,0)
    const filteredTrendingProducts = products.filter(
      (item) => item.category == 'Women Clothes'
    )
    const filteredBestSalesProducts = products.filter(
      (item) => item.numOfSales >= 80
    )
    const newArrivalsProducts = products.filter(
      (item) => item.arrival == 'new'
    )
    const filteredPopularProducts = products.filter(
      (item) => item.arrival == 'popular'
    )

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setNewArrivals(newArrivalsProducts)
    setPopularProducts(filteredPopularProducts)
  },[])

  return (
    <Helmet title={'Home'}>
      <section className="home-section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="home-content">
                <p className="home-subtitle" data-aos='fade-down' data-aos-duration='2000'>Trending Products in {year}</p>
                <h2 data-aos='fade-right' data-aos-duration='2000'>Improve Your Clothing Style With Beautiful Afghan Dresses</h2>
                <p data-aos='fade-right' data-aos-duration='2000'>The Afghan national dress reflects the rich cultural diversity and traditions of the 
                  country, with regional variations in styles and designs. It is not only a representation of Afghan culture but also serves as a source 
                  of pride and a connection to the country's history and heritage.
                </p>
                <div data-aos='fade-up' data-aos-duration='2000'>
                  <motion.button whileTap={{ scale: 1.2 }} className="shop-button">
                    <Link to='/shop'>SHOP NOW <i className="ri-arrow-right-s-line"></i></Link>
                  </motion.button>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div>
                <img data-aos='fade-left' data-aos-duration='2000' src={homeImage} alt="" className='home-image' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title" data-aos='zoom-in' data-aos-duration='1200'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts.slice(0, 4)} />
          </Row>
        </Container>
      </section>
      <section className="best-sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count-down-col' data-aos='fade-left' data-aos-duration='2000'>
              <div className="clock-top-content">
                <h4 className='text-white fs-6 mb-2 mt-5'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="shop-button store-button">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter-img'>
              <img src={counterImage} alt="" data-aos='fade-right' data-aos-duration='2000' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mt-5'>
              <h2 className="section-title">New Arrivals</h2>
            </Col>
            <ProductsList data={newArrivals} />
          </Row>
        </Container>
      </section>
      <section className="popular-category">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home