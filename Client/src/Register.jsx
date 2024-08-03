import { useState } from 'react'

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const Register = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log(response)
    }
    return (
        <>
            <div className='bg-blue-100 h-screen flex items-center justify-center'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={Register}>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder='username' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='password' placeholder='password' />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Register</button>

                </form>

            </div>
        </>
    )
}

export default Register