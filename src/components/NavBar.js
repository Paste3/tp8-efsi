import { Link } from "react-router-dom";

export default function MyNavBar() {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand" href="#">Navbar</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/home"> Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/estadistica"> Estadistica </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contacto"> Contacto </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}