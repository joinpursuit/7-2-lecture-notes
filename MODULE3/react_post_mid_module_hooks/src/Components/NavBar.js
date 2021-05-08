import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/characters">Rick & Morty Characters</NavLink>
            <NavLink to="/clock">Clock</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/dogs">Dogs</NavLink>
            <NavLink to="/singledog">Single Dog</NavLink>
        </nav>
    )
}

export default NavBar; 

// SPA - Single Page Application