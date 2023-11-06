import { Route, Routes } from 'react-router-dom'
import { useAuthContext } from './contexts/authContext'
import ProtectedRoute from './components/mainComponents/ProtectedRoute'
import Contact from "./pages/Contact"
import Footer from "./components/mainComponents/Footer"
import Login from './pages/Login'
import Navbar from './components/mainComponents/navbar'
import Gallery from './pages/Gallery'
import Home from './pages/home'
import Shop from "./pages/Shop"
import SignUp from './pages/SignUp'

import './App.scss'

function App () {
  const { user } = useAuthContext()

  return (
    <>
      <div className='appContainer'>
        <header className='navHeader'>
          <Navbar />
        </header>
        <main className='mainContent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/shop" element={<Shop />} />
            </Route>
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

export default App
