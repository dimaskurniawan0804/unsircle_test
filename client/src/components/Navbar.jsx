import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    const toItemList = () => {
        navigate('/allItem')
    }

    const toCompanyList = () => {
        navigate('/company')
    }

    const doLogout = () => {
        localStorage.clear()
        navigate('/login')
    }
    const toCategory = () => {
        navigate('/category')
    }
    const toCategoryForm = () => {
        navigate('/formCategory')
    }
    return (

        <div>
            <nav>
                <div className="w-full bg-red-500 h-14 flex justify-between px-12 items-center
            border-2 border-white
            ">
                    <div>
                        <ul className="flex items-center">
                            <li className="text-white text-4xl mr-4">
                                <Link to={'/'}>
                                    Dashboard
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="text-white mx-1"><button className="border-2 p-1 w-36" onClick={toItemList}>Item</button></li>
                            <li className="text-white mx-1"><button className="border-2 p-1 w-36" onClick={toCompanyList}>Company</button></li>
                            <li className="text-white mx-1"><button className="border-2 p-1 w-36" onClick={toCategory}>Add Transaction</button></li>
                            <li className="text-white mx-1"><button className="border-2 p-1 w-36" onClick={doLogout}>Logout</button></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}