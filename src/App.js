import React from "react";
import Router from "./shared/Router";

import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
// body {
//   @import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
//  
//   font-family: 'Poor Story', cursive;
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
