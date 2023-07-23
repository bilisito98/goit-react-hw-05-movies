import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = ({link, title}) => {
    return <nav>
        <NavLink to={link} className={({isActive}) => isActive ? s.link__active : s.link} >{ title }</NavLink>
    </nav>
}

export default Navigation;
