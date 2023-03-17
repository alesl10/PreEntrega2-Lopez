import CartWidget from "../CartWidget";
import img from "../../assets/images/logo-marca-agua.png"
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar(){
    return (<div>
        <ul className="lista">
            <li><NavLink to={"/"}><img src={img} alt="Tazarpado logo" className="logo"/></NavLink></li>            
            <li className="categoria"><NavLink to={"/category/ceramica"}>Tazas Ceramica</NavLink></li>
            <li className="categoria"><NavLink to={"/category/polimero"}>Tazas Polimero</NavLink></li>
            <li><CartWidget /></li>            
        
        </ul>
    </div>)
}

export default NavBar;