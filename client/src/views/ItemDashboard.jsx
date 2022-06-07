import Navbar from '../components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { getAllItem, deleteItem, getItemById } from '../store/actions/itemActions.js'

export default function DashboardPage() {
    const { allItem, isLoading } = useSelector((state) => state.item)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllItem())
    }, [])

    const toUpdateItem = (itemId) => {
        // navigate(`/updateItem/${itemId}`)
        dispatch(getItemById(itemId))
        setTimeout(() => {
            navigate(`/updateItem/${itemId}`)
        }, 1000)
    }

    const doDeleteItem = (menuId) => {
        dispatch(deleteItem(menuId))
            .then((data) => {
                navigate('/allItem')
                console.log(data);
            })
    }

    const toAddItem = () => {
        navigate('/addItem')
    }
    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className='mb-4'>
            <Navbar></Navbar>

            <div className=''>
                <div className='my-6'>
                    <h1 className='font-bold text-4xl'>Item List</h1>
                </div>
                <div className='mb-1 flex justify-start'>
                    <button
                        onClick={toAddItem}
                        className='bg-blue-500 w-20 mx-1 border-2 rounded-md font-semibold'>
                        Add Item
                    </button>
                </div>
                <div>
                    <table className='w-full border-2'>
                        <thead className='w-screen border-2'>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Item Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allItem.data.map((item, index) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button type="button"
                                            onClick={() => doDeleteItem(item.id)}
                                            className='bg-red-500 w-20 mx-1 border-2 rounded-md font-semibold'>Delete</button>
                                        <button
                                            onClick={() => toUpdateItem(item.id)}
                                            className='bg-yellow-500 w-20 mx-1 border-2 rounded-md font-semibold'>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}