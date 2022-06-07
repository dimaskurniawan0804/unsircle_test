import Navbar from '../components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllTransaction } from '../store/actions/TransactionActions.js'

export default function DashboardPage() {
    const { allTransaction } = useSelector((state) => state.transaction)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllTransaction())
    }, [])
    return (
        <div className='mb-4'>
            <Navbar></Navbar>
            <div className=''>
                <div className='my-6'>
                    <h1 className='font-bold text-4xl'>Data List</h1>
                </div>
                <div>
                    <table className='w-full border-2'>
                        <thead className='w-screen border-2'>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Company Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTransaction.data.map((transaction, index) => (
                                <tr>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.Item.name}</td>
                                    <td>{transaction.Company.name}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>
                                        <button className='bg-red-500 w-20 mx-1 border-2 rounded-md font-semibold'>Delete</button>
                                        <button className='bg-green-500 w-20 mx-1 border-2 rounded-md font-semibold'>Report</button>
                                        <button className='bg-yellow-500 w-20 mx-1 border-2 rounded-md font-semibold'>Update</button>
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