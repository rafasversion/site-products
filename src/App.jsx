import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Header from "./Components/Header";
import NaoEncontrada from "./Components/NaoEncontrada";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
import "./css/Global.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
