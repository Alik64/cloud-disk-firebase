import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import './Home.css'
export default function Home() {
    const currentUser = useSelector(state => state.user.currentUser)

    if (currentUser) {
        return <Navigate to='/private/private-home' />
    }
    return (
        <div className='home'>Home</div>
    )
}
