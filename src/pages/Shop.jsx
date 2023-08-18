import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import ProductsList from '../components/UI/ProductsList'

import products from '../assets/data/products'
import '../styles/shop.css'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'Women Clothes') {
      const filteredProducts = products.filter(item => (
        item.category === 'Women Clothes'
      ))
      setProductsData(filteredProducts)
    }
    if (filterValue === 'Men Clothes') {
      const filteredProducts = products.filter(item => (
        item.category === 'Men Clothes'
      ))
      setProductsData(filteredProducts)
    }
    if (filterValue === 'Jewelry') {
      const filteredProducts = products.filter(item => (
        item.category === 'Jewelry'
      ))
      setProductsData(filteredProducts)
    }
    if (filterValue === 'Carpet') {
      const filteredProducts = products.filter(item => (
        item.category === 'Carpet'
      ))
      setProductsData(filteredProducts)
    }
    if (filterValue === 'Wireless') {
      const filteredProducts = products.filter(item => (
        item.category === 'Wireless'
      ))
      setProductsData(filteredProducts)
    }
  }

  const handleSearch = e => {
    const filterValue = e.target.value
    const filteredProducts = products.filter( item => (
      item.productName.toLowerCase().includes(filterValue.toLowerCase())
    ))
    setProductsData(filteredProducts)
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />
      <section className='pb-3'>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter-widget">
                <select name="" id="" onChange={handleFilter} className='w-100'>
                  <option>Filter By Category</option>
                  <option value='Women Clothes'>Women Clothes</option>
                  <option value='Men Clothes'>Men Clothes</option>
                  <option value='Jewelry'>Jewelry</option>
                  <option value='Carpet'>Afghan Carpet</option>
                  {/* <option value='Wireless'>Wireless</option> */}
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter-widget">
                  <select name="" id="" className='w-100'>
                    <option>Sort By</option>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                  </select>
                </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search-box">
                <input type="text" placeholder='Search...' onChange={handleSearch} />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 ? (
                <h1 className='text-center fs-4 pt-4'>No Products Found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop