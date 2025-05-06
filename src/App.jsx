import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./pages/Formulario";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
