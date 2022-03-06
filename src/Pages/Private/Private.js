import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function Private() {
    const currentUser = useSelector(state => state.user.currentUser)



    if (!currentUser) {
        return <Navigate to='/' />
    }


    return (
        <div>
            <h1>Private</h1>
            <Outlet />
        </div>

    )
}
