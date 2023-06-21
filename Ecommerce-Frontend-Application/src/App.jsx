import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routers from './Routes/routers'
function App() {
  return (
    <main>
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
    
    </main>
  )
}

export default App