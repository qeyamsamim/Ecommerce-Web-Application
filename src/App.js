import React, { useEffect } from 'react'
import Aos from 'aos'
import Layout from './components/Layout/Layout'

import './App.css'

const App = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <Layout />
  )
}

export default App