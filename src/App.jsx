import { Routes, Route } from 'react-router-dom'
import Navbar from './components/mainComponents/navbar'
import Footer from "./components/mainComponents/Footer"
import Home from './pages/home'
import Gallery from './pages/Gallery'
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"

import './App.scss'

export default function App () {

  return (
    <>
      <div className='appContainer'>
        <header className='navHeader'>
          <Navbar />
        </header>
        <main className='mainContent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className='footerFooter'>
          <Footer />
        </footer>
      </div>
    </>
  )
}
