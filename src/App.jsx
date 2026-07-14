import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout" ;
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import Contact from "./pages/Contact";
import PlacesRoute from "./pages/placesRoute";
import NoPage from "./pages/Nopage";
import Service from "./pages/Service";
import Domestic_Tour from "./pages/Domestic_Tour";
import International_Tour from "./pages/International_Tour";
// Make sure the path matches your folder structure exactly!

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="places" element={<PlacesRoute />} />
            <Route path="*" element={<NoPage />} />
            <Route path="service" element={<Service />} />
            <Route path="Domestic_tour" element={<Domestic_Tour />} />
            <Route path="International_tour" element={<International_Tour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
};

export default App;

