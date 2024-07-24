import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Count is {count}
      <br />
      <br />
      <br />
    </div>
  )
}

export default Navbar
