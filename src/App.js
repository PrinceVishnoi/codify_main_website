import React from 'react'
import Header from './component/Header'
import { ChakraProvider } from '@chakra-ui/react'
import MainComponent from './component/HomePage/MainComponent'

export default function App() {
  return (
      <>
      <ChakraProvider>
      <Header/>
      <MainComponent/>
       </ChakraProvider>
      </>
  
  )
}
