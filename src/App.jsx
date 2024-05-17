import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css'

import router from "./Routes";

import { RouterProvider } from "react-router-dom";

function App() {

  return (
<ChakraProvider>
      <>
      <RouterProvider router={router} />
      </>
    </ChakraProvider>
  )
}

export default App
