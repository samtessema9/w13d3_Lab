import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {
  const [form, setForm] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      
      axios({
        method: 'POST',
        url: 'http://localhost:4002/users',
        data: form
      })
    }
  }, [form])

  const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          setError("Passwords do not match");
      } else {
        setForm({
          email,
          password
        })
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type="text" 
        name="email" 
        id="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input 
        type="text" 
        name="password" 
        id="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input 
        type="text" name="confirm-password" id="confirm-password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup