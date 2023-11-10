import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from './contexts/authContext'
import ProtectedRoute from './components/mainComponents/ProtectedRoute'
import Contact from "./pages/Contact"
import Footer from "./components/mainComponents/Footer"
import Login from "../src/components/mainComponents/Login"
import Navbar from './components/mainComponents/navbar'
import Gallery from './pages/Gallery'
import Home from './pages/home'
import Shop from "./pages/Shop"
import SignUp from '../src/components/mainComponents/SignUp'

import './App.scss'

function App () {
  const { user } = useAuthContext()

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // }

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const openSignupModal = () => {
    setIsSignupModalOpen(true)
  }

  const closeSignupModal = () => {
    setIsSignupModalOpen(false)
  }

  return (
    <>
      <div className='appContainer'>
        <header className='navHeader'>
            <Navbar
            handleLoginClick={openLoginModal}
            handleSignupClick={openSignupModal}
            />
            <Login
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={closeLoginModal}
            handleSignupClick={openSignupModal}
            />
            {/* <SignUp
            isSignupModalOpen={isSignupModalOpen}
            setIsSignupModalOpen={closeSignupModal}
            /> */}

        </header>
        <main className='mainContent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
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
