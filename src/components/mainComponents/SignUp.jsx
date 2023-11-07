import { useState } from "react"

import "./signUp.scss"

function SignUp() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <form className="signUpFormGlobal" onSubmit={handleForm}>
        <div className="signUpInputGlobal">
          <label htmlFor="text" className="signUpLabel">
            Firstname :
          </label>
          <input
            type="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Firstname: Jane"
            value={firstname}
          />
        </div>
        <div className="signUpInputGlobal">
          <label htmlFor="text" className="signUpLabel">
            Lastname :
          </label>
          <input
            type="lastname"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Lastname: Doe"
            value={lastname}
          />
        </div>
        <div className="signUpInputGlobal">
          <label htmlFor="email" className="signUpLabel">
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email: jane.doe@mail.com"
            value={email}
          />
        </div>
        <div className="signUpInputGlobal">
          <label htmlFor="password" className="signUpLabel">
            Password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password: ********"
            value={password}
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
    </>
  )
}

export default SignUp
