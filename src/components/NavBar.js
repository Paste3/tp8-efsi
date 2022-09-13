import { Link } from "react-router-dom";

export default function MyNavBar() {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active hov">
                        <Link to="/home" style={{ textDecoration: 'none',fontSize: "20px",margin: "30px",color: "black"}}> Home  </Link>
                    </li>
                    <li className="nav-item active hov ">
                        <Link to="/estadistica" style={{ textDecoration: 'none',fontSize: "20px",margin: "30px",color: "black"}}> Estadistica  </Link>
                    </li>
                    <li className="nav-item active hov">
                        <Link to="/contacto" style={{ textDecoration: 'none',fontSize: "20px",margin: "30px",color: "black"}}> Contacto  </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}