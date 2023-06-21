import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {
  const [form, setForm] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  // const request = async () => {
      
  //   const response = await axios({
  //     method: 'POST',
  //     url: 'https://localhost:4002/users',
  //     data: JSON.stringify(form)
  //   })

  //   console.log(response.data)
  // }
  const [firstRender, setFirstRender] = true

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    } else {
      
      axios({
        method: 'POST',
        url: 'https://localhost:4002/users',
        data: JSON.stringify(form)
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
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="email">Email</label>
      <input type="text" name="email" id="email"/>
      <label for="password">Password</label>
      <input type="text" name="password" id="password"/>
      <label for="confirm-password">Confirm Password</label>
      <input type="text" name="confirm-password" id="confirm-password"/>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup