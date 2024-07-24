import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

import router from "./Routes.jsx";

import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <>
        <RouterProvider router={router} />
      </>
    </ChakraProvider>
  );
}

export default App;
