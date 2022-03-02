import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../Firebase/filebase-auth'
import { modalClose } from '../../redux/modalReducer'
import './Modal.css'

export default function SignUpModal() {
    const signUpModalState = useSelector(state => state.modal.signUpModal)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validation, setValidation] = useState("")

    const closeModal = () => {
        dispatch(modalClose())
    }

    const formHandler = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setValidation("6 characters min")
            return
        }
        try {
            const cred = await signUp(email, password)
            setEmail("")
            setPassword("")
            closeModal()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setValidation("User already exist")
            }
            if (error.code === "auth/invalid-email") {
                setValidation("Invalid Email")
            }

        }

    }

    return (
        <>

            {signUpModalState && <div className='modal'>
                <div className="modal_overlay" onClick={closeModal}></div>
                <div className='modal_content'>
                    <div className="modal_header">
                        <div className="modal_title"><h2>Sign up</h2></div>
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
