import { useState } from "react"
import { useAuthContext } from "../../contexts/authContext"
import { useNavigate, Link } from "react-router-dom"
import photoAPI from "../../services/photoApi"
import "./Login.scss"


function Login({ isLoginModalOpen, setIsLoginModalOpen }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useAuthContext()
  const navigate = useNavigate()
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const handleSignupClick = () => {
    console.log('Signup link clicked')
    setIsSignupModalOpen(true)
  }

  const closeModal = () => {
    setIsLoginModalOpen(false)
  }


// TODO DO I WANT THIS FEATURE?????
  const handleSubmit = (e) => {
    e.preventDefault()
    photoAPI
      .post("/api/auth/login", { email, password })
      .then((res) => {
        setUser(res.data)
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate("/shop")
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
    <div className="login">
      <div className="loginContainer">
        {isLoginModalOpen && (
          <div className="loginmodal">
            <h2>Login</h2>
            <span onClick={closeModal} className="close" title="Close Modal">
              &times;
            </span>
            <form className="loginFormGlobal" onSubmit={handleSubmit}>
              <div className="loginInputGlobal">
                <label htmlFor="email" className="loginLabel">
                  Email :
                </label>
                <input 
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}placeholder="Email: jane.doe@mail.com"
                  value={email}
                />
              </div>
              <div className="loginInputGlobal">
                <label htmlFor="password" className="loginLabel">
                  Password :
                </label>
                <input 
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}placeholder="Password: ********"
                  value={password}
                />
              </div>
              <div className="loginButtons">
              <button 
                type="submit"
                className="loginBttn"
                >Submit</button>
              <button
                type="button"
                className="loginBttn"
                onClick={closeModal}
                >Cancel</button>
                </div>
              <div className="loginForgot">
                <span className="psw">
                  <a href="#">Forgot password?</a>
                </span>
              </div>
              <div className="newAccount">
                <span className="newUser">
                  {/* <a onClick={handleSignupClick}>Set up a new account</a> */}
                  <Link href="#" onClick={handleSignupClick} className="link-register">
          <p className="p-link-register">Already have an account click here!</p>
        </Link>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
      </div>
    </>
  )
}

export default Login
