import { NavLink } from "react-router-dom";

export function Navbar() {

    let token = localStorage.getItem("loginToken")

    if (!token) {
        return (
            <nav>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/reacthookloginform"  >
                    Login
                </NavLink>
            </nav>
        );
    }
    else {
        return (
            <nav>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/logout"  >
                    Logout
                </NavLink>
                <NavLink to="/jobslist"  >
                    Jobs List
                </NavLink>
            </nav>
        );

    }
}
