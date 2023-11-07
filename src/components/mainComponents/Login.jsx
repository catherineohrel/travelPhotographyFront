import { useState } from "react"
import { useAuthContext } from "../../contexts/authContext"
import { useNavigate } from "react-router-dom"
import photoAPI from "../../services/photoApi"
import "./Login.scss"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useAuthContext()

  const navigate = useNavigate()

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
      <div className="loginContainer">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="loginFormGlobal">
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
          <button type="submit">Connexion</button>
        </form>
      </div>
    </>
  )
}

export default Login
