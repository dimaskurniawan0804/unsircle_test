import { useState } from 'react'
import { registerAdmin } from '../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const { isRegister } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(registerAdmin({
            name: data.name,
            email: data.email,
            password: data.password
        }))
            .then((data) => { })
            .catch((error) => { })
    }
    if (isRegister) {
        navigate('/login')
    }
    return (
        <div className="flex justify-center items-center mx-auto h-screen bg-red-500">
            <div className="w-full max-w-xs">
                <div className="mb-2 font-semibold text-4xl text-white outline-1 text">
                    CFK
                </div>
                <form onSubmit={submitHandler} className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 font-semibold text-lg">
                        Admin Register
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="email">
                            Name
                        </label>
                        <input
                            name='name'
                            value={data.name}
                            onChange={(event) => {
                                const { name, value } = event.target
                                setData({ ...data, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Pororo" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            name='email'
                            value={data.email}
                            onChange={(event) => {
                                const { name, value } = event.target
                                setData({ ...data, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="test@mail.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            name='password'
                            value={data.password}
                            onChange={(event) => {
                                const { name, value } = event.target
                                setData({ ...data, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500  rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}