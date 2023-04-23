import React from "react";
import Header from "./component/Header";
import Home from "./component/HomePage/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Service from "./component/ServicePage/Service";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Service />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}
