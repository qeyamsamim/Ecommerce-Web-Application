import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { cartActions } from '../redux/slices/cartSlice'
import { userSelector, useDispatch, useSelector } from 'react-redux'

import '../styles/cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? 
                <h2 className='fs-4 text-center'>No item added to the cart.</h2> :
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item) => (
                        // <tr key={item.id}>
                        //   <td><img src={item.imgUrl} alt="" /></td>
                        //   <td>{item.productName}</td>
                        //   <td>${item.price}</td>
                        //   <td>{item.quantity}</td>
                        //   <td><i className="ri-delete-bin-fill"></i></td>
                        // </tr>
                        <Tr item={item} key={item.id} />
                      ))
                    }
                  </tbody>
                </table>
              }
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6'>Taxes and shipping will be calculated.</p>
              <div>
              <button className="shop-button w-100"><Link to='/checkout'>Checkout</Link></button>
                <button className="shop-button w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {

  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td>
      <motion.i 
        whileTap={{ scale: 1.2 }} 
        className="ri-delete-bin-fill"
        onClick={deleteProduct}
      ></motion.i>
    </td>
  </tr>
}

export default Cart