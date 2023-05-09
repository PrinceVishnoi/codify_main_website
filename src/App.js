import React from 'react'
import Header from './component/Header'
import { ChakraProvider } from '@chakra-ui/react'
import Service from "../src/component/ServicePage/Service"
import { Route, Routes } from 'react-router-dom'
import MainComponent from './component/HomePage/MainComponent'
import Footer from './component/Footer'

export default function App() {
  return (
    <>
      <ChakraProvider>
      <Header/>
      <Routes>
        <Route exact path='/' element={<MainComponent/>}/>
        <Route exact path='/services' element={<Service/>}/>  
     </Routes>
     <Footer/>
       </ChakraProvider>
      </>
  
  )
}
