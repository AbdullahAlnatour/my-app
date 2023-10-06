import {Link} from "react-router-dom";

function Nav(){
    return (    <nav>
        <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking-page">Booking page</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about-me">AboutMe</Link></li>
        </ul>
        </nav>);
}

export default Nav;
