import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink to="/clock">Clock</NavLink>
            <NavLink to="/dogs">Dogs</NavLink>
            <NavLink to="/singledog">Single Dog</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
    )
}

export default NavBar; 