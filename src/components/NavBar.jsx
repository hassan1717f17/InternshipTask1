import './NavBar.css'

const NavBar=()=>{
    return(
        <nav className="navbar">
            <div className="logo">Logo Placeholder</div>
            <ul className="nav-links">
                <li><button className="nav-button">Home</button></li>
                <li><button className="nav-button">About</button></li>
                <li><button className="nav-button">Services</button></li>
                <li><button className="nav-button">Products</button></li>
                <li><button className="nav-button">Contact</button></li>
                <li><button className="nav-button">FAQ</button></li>
                <li><button className="nav-button">Support</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;