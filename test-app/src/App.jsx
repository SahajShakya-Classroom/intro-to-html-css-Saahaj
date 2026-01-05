
import './App.css'
import { useState } from 'react'
import Myinput from './component/Myinput'

function App() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.username.trim() || !form.password) {
      setError('Please enter username and password.')
      return
    }
    setError('')
    setSubmitted({ ...form })
    setForm({ username: '', password: '' })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>

        <Myinput
          label="Username:"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
        />

        <Myinput
          label="Password:"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">Submit</button>

        {submitted && (
          <div className="result">
            <strong>Submitted:</strong> {submitted.username}
          </div>
        )}
      </form>
    </div>
  )
}

export default App
