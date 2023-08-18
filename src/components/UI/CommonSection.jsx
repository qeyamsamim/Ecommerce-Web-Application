import React from 'react'
import { Container } from 'reactstrap'

import '../../styles/common-section.css'

const CommonSection = ({ title }) => {
  return (
    <section className="common-section">
        <Container className='text-center'>
            <h1 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">{title}</h1>
        </Container>        
    </section>
  )
}

export default CommonSection