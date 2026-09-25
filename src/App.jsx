
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from "./Components/ScrollToTop";
import HarikaParadise from './Components/HarikaParadise'
import WhyChoose from './Components/WhyChoose'
import Gallery from './Components/Gallery'
import  Contact  from './Components/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/harika-paradise" element={<HarikaParadise />} />
        <Route path="/Why-Choose" element={<WhyChoose/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App