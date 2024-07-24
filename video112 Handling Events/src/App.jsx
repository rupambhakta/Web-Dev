import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Harry")
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleClick = () => {
    alert("Hay i am clicked!")
  }
  const handleMouseOver = () => {
    alert("I am a mouse over!")
  }
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  }

  return (
    <>
      <div className="buttom">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red.
      </div> */}
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
