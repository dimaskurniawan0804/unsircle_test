import Navbar from '../components/Navbar.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { getAllCompany, deleteCompany, updateCompanyById, getCompanyById } from '../store/actions/companyAction.js'


export default function CompanyDashboard() {
    const { allCompany, isLoading } = useSelector((state) => state.company)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllCompany())
    }, [])

    const toUpdateCompany = (companyId) => {
        dispatch(getCompanyById(companyId))
        setTimeout(() => {
            navigate(`/updateCompany/${companyId}`)
        }, 1000)
    }

    const doDeleteCompany = (companyId) => {
        dispatch(deleteCompany(companyId))
            .then((data) => {
                navigate('/company')
                console.log(data);
            })
    }

    const toAddCompany = () => {
        navigate('/addCompany')
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
                    <h1 className='font-bold text-4xl'>Company List</h1>
                </div>
                <div className='mb-1 flex justify-start'>
                    <button
                        onClick={toAddCompany}
                        className='bg-blue-500 w-32 mx-1 border-2 rounded-md font-semibold'>
                        Add Company
                    </button>
                </div>
                <div>
                    <table className='w-full border-2'>
                        <thead className='w-screen border-2'>
                            <tr>
                                <th>Id</th>
                                <th>Company Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCompany.data.map((company, index) => (
                                <tr>
                                    <td>{company.id}</td>
                                    <td>{company.name}</td>
                                    <td>
                                        <button type="button"
                                            onClick={() => doDeleteCompany(company.id)}
                                            className='bg-red-500 w-20 mx-1 border-2 rounded-md font-semibold'>Delete</button>
                                        <button
                                            onClick={() => toUpdateCompany(company.id)}
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