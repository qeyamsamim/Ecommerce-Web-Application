import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductList from '../components/UI/ProductsList'

import products from '../assets/data/products'
import '../styles/product-details.css'

const ProductDetails = () => {

  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(null)
  const { id } = useParams()
  const reviewUser = useRef('')
  const reviewMessage = useRef('')
  const dispatch = useDispatch()

  const product = products.find(item => item.id === id)
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product
  const relatedProducts = products.filter((item) => item.category === category && item.id !== id)
  
  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMessage = reviewMessage.current.value

    const reviewObject = {
      user: reviewUserName,
      text: reviewUserMessage,
      rating,
    }
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price
    }))
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg='6'>
              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-half-s-fill"></i></span>
                  </div>
                  <p className='mb-0'>(<span>{avgRating}</span> Ratings)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='product-price'>${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button 
                  whileTap={{ scale: 1.2 }} 
                  className="shop-button"
                  onClick={addToCart}>Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab-wrapper d-flex align-items-center gap-5">
                <h6 
                  className={`${tab==='desc' ? 'active-tab' : ''}`}
                  onClick={() => setTab('desc')}
                  >Description</h6>
                <h6 
                  className={`${tab==='rev' ? 'active-tab' : ''}`}
                  onClick={() => setTab('rev')}
                  >Reviews ({reviews.length})</h6>
              </div>
              {
                tab === 'desc' ? <div className="tab-content mt-4">
                  <p>{description}</p>
                </div> : (
                  <div className="product-review">
                    <div className="review-wrapper mt-3">
                      <ul>
                        {
                          reviews?.map((item, index) => (
                            <li key={index} className='mb-3'>
                              <h6 className='mb-0'>Reviewer Name</h6>
                              <span>{item.rating}</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>
                      <div className="review-form">
                        <h4>Leave a Review Here</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form-group">
                            <input 
                              type="text" 
                              placeholder='Enter Name'
                              ref={reviewUser}
                              required />
                          </div>
                          <div className="form-group d-flex align-items-center gap-3 rating-group">
                            <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(1)}>
                              1<i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(2)}>
                              2<i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(3)}>
                              3<i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(4)}>
                              4<i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(5)}>
                              5<i className="ri-star-s-fill"></i>
                            </motion.span>
                          </div>
                          <div className="form-group">
                            <textarea 
                              rows={4} 
                              type="text" 
                              placeholder='Review Message...'
                              ref={reviewMessage}
                              required />
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.2 }}
                            type='submit' 
                            className="shop-button">
                              Submit</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }
            </Col>
            <Col lg='12' className='mt-4'>
              <h2 className="related-products-title">You may also like</h2>
            </Col>
            <ProductList data={relatedProducts.slice(0,4)} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails