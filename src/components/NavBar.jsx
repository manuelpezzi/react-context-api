import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.body.classList.toggle("bg-dark", darkMode);
        document.body.classList.toggle("text-light", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);
    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container d-flex">
                <NavLink className="navbar-brand" to="/">MyBlog</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts">Post</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/chi-siamo">Chi siamo</NavLink>
                        </li>



                    </ul>
                </div>

                <button
                    className={`btn ${darkMode ? "btn-light" : "btn-dark"} ms-auto`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>

            </div>
        </nav>
    )
}
export default Navbar