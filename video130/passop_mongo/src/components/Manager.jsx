import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/icon/notvisible.png")) {
            ref.current.src = "/icon/visible.png"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "/icon/notvisible.png"
            passwordRef.current.type = "password"
        }
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
            toast('Password deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast('Password not saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const deletePassword = (id) => {
        console.log("Dleeting password with id ", id);
        let c = confirm("Do you want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id != id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
            toast('Password deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const editPassword = (id) => {
        console.log("Editing password with id ", id);
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id != id))

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to clipbord!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className="p-2 md:p-0 md:mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>
                <div className="flex flex-col p-4 gap-4 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row gap-4 w-1/2">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name='username' id='username' />
                        <div className="relative w-full">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-green-900 w-full p-4 py-1' type="password" name='password' id='password' />
                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-2 invert' width={40} src="icon/visible.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-1 hover:bg-green-500 bg-green-400 rounded-full px-3 py-1 w-fit border border-green-900'>
                        Save Password
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon></button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-xl py-4'>Your passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwoed to show</div>}
                    {passwordArray.length != 0 && <table className="table-fixed w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2 '>Site Name</th>
                                <th className='py-2 '>Username</th>
                                <th className='py-2 '>Password</th>
                                <th className='py-2 '>Action</th>
                            </tr>
                        </thead>
                        <tbody className=' bg-green-50'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center '>
                                        <div className='flex gap-2 justify-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <img onClick={() => copyText(item.site)} className='invert w-4 py-2 cursor-pointer' src="icon/copy.png" alt="" />
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center '>
                                        <div className='flex gap-2 justify-center'>
                                            <a href={item.site} target='_blank'>{item.username}</a>
                                            <img onClick={() => copyText(item.username)} className='invert w-4 py-2 cursor-pointer' src="icon/copy.png" alt="" />
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center '>
                                        <div className='flex gap-2 justify-center'>
                                            <a href={item.site} target='_blank'>{item.password}</a>
                                            <img onClick={() => copyText(item.password)} className='invert w-4 py-2 cursor-pointer' src="icon/copy.png" alt="" />
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center flex justify-center gap-3 '>
                                        <span><img onClick={() => { editPassword(item.id) }} className=' invert w-5 cursor-pointer' src="icon/edit.png" alt="Edit" /></span>
                                        <span><img onClick={() => { deletePassword(item.id) }} className='invert w-5 cursor-pointer' src="icon/delete.png" alt="Delete" /></span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
