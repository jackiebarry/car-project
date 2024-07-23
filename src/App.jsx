// import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

import AppRouter from "./Routes.jsx";

function App() {
  // return <div>goodbye</div>;
  return (
    <ChakraProvider>
      <>
        <AppRouter />
      </>
    </ChakraProvider>
  );
}

export default App;
