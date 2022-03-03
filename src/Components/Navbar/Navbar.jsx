import { useState } from 'react'
import './navbar.css'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/cloud-cd-logo.png'
import menu from '../../assets/images/mobil-menu.svg'

import { useWindowSize } from '../../utils/custom-hooks';
import { signInToggle, signUpToggle } from '../../redux/modalReducer'
import { logOut } from '../../Firebase/firebase-config'



export default function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser)
    const loadingData = useSelector(state => state.user.loadingData)

    const [menuState, setMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!menuState)
    }


    const size = useWindowSize();
    const dispatch = useDispatch()

    return (
        <nav className="navbar ">
            <Link to="/private/private-home">
                <div className='navbar_brand'>
                    <img src={logo} className='navbar_logo' alt="brand logo" />
                    <h1><span style={{ color: "var(--blue)" }} >Cloud</span><span style={{ color: "var(--green)" }} >Disk</span></h1>
                </div>
            </Link>
            <div className={size.width < 480 ? "navbar_mobil visible" : "navbar_mobil hide"}>
                <img onClick={toggleMenu}
                    src={menu} alt="" />
            </div>
            <div className={size.width < 480 ? "navbar_menu mobile" : "navbar_menu"}>

                <div className={size.width < 480 ? "navbar_btns mobile" : "navbar_btns"}
                    style={{ display: menuState || size.width > 480 ? "flex" : "none" }}>

                    {currentUser
                        ? <div>
                            <Link to='/private/private-home'>
                                <h3>{currentUser.email}</h3>
                            </Link>
                            <button onClick={() => logOut()}>Logout</button>
                        </div>
                        : <div> {!loadingData && <>
                            <button onClick={() => dispatch(signInToggle(true))} className="navbar_btn">Login</button>
                            <button onClick={() => dispatch(signUpToggle(true))} className="navbar_btn">Sign Up</button>
                        </>
                        }
                        </div>
                    }



                </div>
            </div>
        </nav >
    )
}

