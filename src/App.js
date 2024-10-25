import React from "react";
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />  {/* Home route */}
          <Route path='/auth' element={<Auth />} />  {/* Auth route */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
