import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { postnewItem } from "../store/actions/itemActions"


export default function FormMenu() {
    const { newItem } = useSelector((state) => state.item)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [item, setItem] = useState({
        name: "",
        quantity: 0,
    })

    const postItem = (e) => {
        e.preventDefault()
        dispatch(postnewItem({
            name: item.name,
            quantity: item.quantity,
        }))
            .then((data) => {
                console.log(data, "<><><>");
                navigate('/allItem')
            })
            .catch(error => { })
    }

    return (
        <div className="flex justify-center items-center mx-auto h-screen bg-red-500">
            <div className="w-full max-w-xs">
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
                            onChange={(event) => {
                                const { name, value } = event.target
                                setItem({ ...item, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" />
                        <label className="block text-gray-700 text-sm font-bold text-left mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            name="quantity"
                            onChange={(event) => {
                                const { name, value } = event.target
                                setItem({ ...item, [name]: value })
                            }}
                            className="shadow appearance-none border-2 border-red-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" />
                    </div>
                    <div className="mb-2">
                        <button
                            onClick={postItem}
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