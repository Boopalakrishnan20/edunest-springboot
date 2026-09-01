import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="logo">
                    EduNest
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/my-courses">
                        My Courses
                    </Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className="register-btn">
                        Get Started
                    </Link>
                    
                </div>

            </div>
        </nav>
    );
}

export default Navbar;