import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"

import Footer from "./components/footer/Footer"
import Header from "./components/navbar/Header"
import Copyright from "./components/copyright/Copyright"
import Services from "./pages/services/Services"
import Portfolio from "./pages/portfolio/Portfolio"
import About from "./pages/about/About"


const App = () => {
  return (
    <div>

      <Router>

       

        <Header />

        
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/services" element={< Services />} />
          <Route path="/portfolio" element={< Portfolio />} />
          <Route path="/about" element={< About />} />
     

        </Routes>

        <Footer />

        <Copyright />

      </Router>


    
    </div>
  )
}

export default App
