import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Hay welcome to my page")
  }, [])
  useEffect(() => {
    alert("Count was changed")
  }, [count])
  
  useEffect(() => {
    alert("This is the first render of app.jsx")
    return ()=>{
      alert("Component was unmounted!")
    }
  }, [])



  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update count</button>
    </>
  )
}

export default App
