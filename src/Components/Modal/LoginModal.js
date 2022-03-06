import React, { useState } from 'react'
import './Modal.css'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { modalClose } from '../../redux/modalReducer'
import { login } from '../../Firebase/firebase-config'


export default function LoginModal() {
    const signInModalState = useSelector(state => state.modal.signInModal)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validation, setValidation] = useState("")

    const closeModal = () => {
        dispatch(modalClose())
    }



    const formHandler = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setValidation("6 characters min")
            return
        }
        try {
            login(email, password)

            setPassword("")
            setEmail("")
            setValidation("")
            navigate('/private/private-home')
            closeModal()

        } catch (err) {

            setValidation("OOps! Email or/and Password are incorect")
        }

    }

    return (
        <>

            {signInModalState && <div className='modal'>
                <div className="modal_overlay" onClick={closeModal}></div>
                <div className='modal_content'>
                    <div className="modal_header">
                        <div className="modal_title"><h2>Login</h2></div>
                        <button className='modal_close' onClick={closeModal}>X</button>
                    </div>
                    <div className="modal_body">
                        <form className='modal_form' onSubmit={formHandler}>
                            <label htmlFor="signUpEmail">Email</label>
                            <input
                                type="email"
                                id='signUpEmail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='modal_email' />
                            <label htmlFor="signUpPassword">Password</label>
                            <input
                                type="password"
                                id='signUpPassword'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='modal_password' />
                            <h5 className='modal_validation'>{validation}</h5>
                            <button className='modal_submit'>Submit</button>
                        </form>
                    </div>


                </div>
            </div>
            }
        </>
    )
}
