import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-6 h-10">

                <div className="logo font-bold text-2xl">

                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/&gt;</span>

                </div>
                {/* <ul>
                    <li className='flex gap-6'>
                        <a href="/">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </li>
                </ul> */}
                <button className='text-green-500 items-center gap-1 rounded-sm flex font-bold'>
                    GitHub
                    <img className='invert w-10 p-1 rounded-full' src="icon/github.png" alt="github logo" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
