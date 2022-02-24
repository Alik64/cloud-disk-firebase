import './navbar.css'
import logo from '../../assets/images/cloud-cd-logo.png'





export default function Navbar() {



    return (
        <nav className="navbar ">
            <div className='navbar_brand'>
                <img src={logo} className='navbar_logo' alt="brand logo" />
                <h1><span>Cloud</span><span>Disk</span></h1>
            </div>
            <div className='navbar_btns'>
                <button className="navbar_btn">Sign Up</button>
                <button className="navbar_btn">Sign In</button>
                <button className="navbar_bnt">Log out</button>
            </div>
        </nav>
    )
}
