import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { getCompanyById, updateCompanyById } from "../store/actions/companyAction"


export default function UpdateCompanyForm() {
    const { companyById, isLoading } = useSelector((state) => state.company)
    const { companyId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(companyById, "<<<<<<")
    const [company, setCompany] = useState({
        name: companyById.data.name,
    })

    const doUpdate = (e) => {
        e.preventDefault()
        dispatch(updateCompanyById({ companyId: companyId, }, {
            name: company.name,
        }))
            .then((data) => {
                if (data.status === 200) {
                    navigate('/company')
                } else {
                    throw new Error("error update menu")
                }
            })
            .catch(error => { })
    }

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className="flex justify-center items-center mx-auto h-screen bg-red-500">
            <div className="w-full max-w-xs">
                <div className="mb-2 font-semibold text-4xl text-white outline-1 text">
                    Update Item
                </div>
                <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 font-semibold text-lg">
                        Add New Menu
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            defaultValue={companyById.data.name}
                            onChange={(event) => {
                                const { name, value } = event.target
                                setCompany({ ...company, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mb-2">
                        <button
                            onClick={doUpdate}
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