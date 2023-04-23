import React from 'react'
import Header from './component/Header'
import Home from './component/HomePage/Home'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <>
      <ChakraProvider>
      <Header/>
      <Home/>   
       </ChakraProvider>
      </>
  
  )
}
