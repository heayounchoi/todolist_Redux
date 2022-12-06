import React from "react";
import Router from "./shared/Router";

import {createGlobalStyle} from "styled-components";
import './fonts/font.css'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Gaegu', cursive;
    }
    
    button {
        font-family: 'Gaegu', cursive;
    }
    
    input {
        font-family: 'Gaegu', cursive;
    }
`;

function App() {
  return (
      <>
        <GlobalStyle/>
        <Router/>
      </>
  )
};


export default App;
