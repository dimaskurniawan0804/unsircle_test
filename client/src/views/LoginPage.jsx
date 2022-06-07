import { Link } from "react-router-dom"
import { useState } from 'react'
import { loginAdmin } from '../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const { isLogin } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const doLogin = (e) => {
        e.preventDefault()
        dispatch(loginAdmin({
            email: data.email,
            password: data.password
        }))
            .then((isLogin) => {
                if (!isLogin) {
                    throw new Error("error register")
                } else {
                    navigate('/allItem')
                }
            })
    }
    return (
        <div className="flex justify-center items-center mx-auto h-screen bg-red-500">
            <div className="w-full max-w-xs">
                <form onSubmit={doLogin} className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 font-semibold text-lg">
                        Login Admin
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
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="test@mail.com" />
                    </div>
                    <div className="mb-2">
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
                    <div>
                        Don't have account ?
                        <Link to="/register">
                            <button type="button" className="hover:text-red-600">Sign Up</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
