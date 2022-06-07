import { Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
    const access_token = localStorage.getItem("user_token")

    if (!access_token) return <Navigate to={('/login')} />
    return children
}

export function RequireNoAuth({ children }) {
    const access_token = localStorage.getItem("user_token")

    if (access_token) return <Navigate to={('/')} />
    return children
}