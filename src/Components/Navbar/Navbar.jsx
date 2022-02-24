import './navbar.css'
import logo from '../../assets/images/cloud-cd-logo.png'





export default function Navbar() {



    return (
        <nav className="navbar ">
            <div className='navbar_logo'>
                <img src={logo} className='navbar_logo' alt="" />
                <h1><span>Cloud</span><span>Disk</span></h1>
            </div>
            <div className='navbar_btns'>
                <button className="btn ">Sign Up</button>
                <button className="btn ">Sign In</button>
                <button className="btn ">Log out</button>
            </div>
        </nav>
    )
}
