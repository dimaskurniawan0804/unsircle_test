import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { postnewCompany } from "../store/actions/companyAction"


export default function AddCompany() {
    const { newCompany } = useSelector((state) => state.company)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [company, setCompany] = useState({
        name: "",
    })

    const postCompany = (e) => {
        e.preventDefault()
        dispatch(postnewCompany({
            name: company.name,
        }))
            .then((data) => {
                console.log(data, "<><><>");
                navigate('/company')
            })
            .catch(error => { })
    }

    return (
        <div className="flex justify-center items-center mx-auto h-screen bg-red-500">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 font-semibold text-lg">
                        Add New Company
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            onChange={(event) => {
                                const { name, value } = event.target
                                setCompany({ ...company, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mb-2">
                        <button
                            onClick={postCompany}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit Menu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}