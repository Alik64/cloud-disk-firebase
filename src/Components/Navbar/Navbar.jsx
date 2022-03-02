

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/images/cloud-cd-logo.png'
import menu from '../../assets/images/mobil-menu.svg'
import { useWindowSize } from '../../utils/custom-hooks';
import { signInToggle, signUpToggle, modalClose } from '../../redux/modalReducer'







export default function Navbar() {


    const [menuState, setMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!menuState)
    }


    const size = useWindowSize();
    const dispatch = useDispatch()

    return (
        <nav className="navbar app_wrapper">
            <Link to="/">
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


                <div>



                </div>
                <div className={size.width < 480 ? "navbar_btns mobile" : "navbar_btns"}
                    style={{ display: menuState || size.width > 480 ? "flex" : "none" }}>
                    <button onClick={() => dispatch(signUpToggle(true))} className="navbar_btn">Sign Up</button>
                    <button onClick={() => dispatch(signInToggle(true))} className="navbar_btn">Sign In</button>
                    <button onClick={() => dispatch(modalClose(false))} className="navbar_btn">Log out</button>
                </div>
            </div>
        </nav >
    )
}

