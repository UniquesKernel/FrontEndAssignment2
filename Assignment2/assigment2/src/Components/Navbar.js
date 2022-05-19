import { NavLink } from "react-router-dom";
import jwtDecode from 'jwt-decode';


export function Navbar() {

    let token = localStorage.getItem("loginToken")
    var role;

    if (token != null) {
        var payload = jwtDecode(token);
        role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }

    if (!token) {
        return (
            <nav>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/loginform"  >
                    Login
                </NavLink>
            </nav>
        );
    }
    else {
        if (role === "Manager") {
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
                    <NavLink to="/createjob"  >
                        Create Job
                    </NavLink>
                    <NavLink to="/createmodel"  >
                        Create Model
                    </NavLink>
                    <NavLink to="/createmanager"  >
                        Create Manager
                    </NavLink>
                    <NavLink to="/postjobtomodel"  >
                        Add Job From Model
                    </NavLink>
                    <NavLink to="/deletejobfrommodel"  >
                        Delete Job From Model
                    </NavLink>
                </nav>
            );
        }
        else if (role === "Model") {
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
}
