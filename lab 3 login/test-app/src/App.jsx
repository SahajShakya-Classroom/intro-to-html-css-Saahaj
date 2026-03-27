
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

async function handleSubmit(e) {
  e.preventDefault();
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form) // Your username and password
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(data);
      setError('');
    } else {
      setError(data.error);
    }
  } catch (err) {
    setError("Backend is not running!");
  }
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
