import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice.js'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is : {count}
        <button onClick={() => dispatch(increment())}> +</button>
        <br />
        <button onClick={() => dispatch(multiply())}> *</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(5))}>Incriment by 5</button>
      </div>
    </>
  )
}

export default App
