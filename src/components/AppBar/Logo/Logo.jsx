import { NavLink } from "react-router-dom";
import sprite from '../../../images/icons.svg'
import s from './Logo.module.css';

export default function Logo({link}) {
  return <NavLink className={s.logo} to={link}>
    <svg className={s.icon} width="24" height="24" aria-label="logo">
      <use href={`${sprite}#logo`}></use>
    </svg>
    <p className={s.text}>Filmoteka</p>
  </NavLink>
}
