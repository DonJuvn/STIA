import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Video from "./components/video";
import Footer from "./components/footer";
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";

import "./App.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Menu />
            <Video />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/projects" element={<ProjectsPage />} />
               <Route path="/services" element={<ServicesPage />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
