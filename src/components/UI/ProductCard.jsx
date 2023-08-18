import React from 'react'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../styles/ProductCard.css'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const ProductCard = ({ item }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }))
    }

  return (
    <Col lg='3' md='4' className='mb-4'>
        <div className="product-item pb-3">
            <div className="product-img">
                <motion.img whileHover={{ scale: 0.8 }} src={item.imgUrl} alt="" />
            </div>
            <div className="p-2 product-info">
                <h3 className="product-name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span>{item.category}</span>
            </div>
            <div className="product-card-bottom d-flex align-items-center justify-content-between">
                <span className="price">${item.price}</span>
                <motion.span whileTap={{ scale: 1.3 }} onClick={addToCart}>
                    <i className="ri-add-line"></i>
                </motion.span>
            </div>
        </div>
    </Col>
    
  )
}

export default ProductCard