import React from 'react'
import { Link } from "react-router-dom";
const NavLink = ({linkTo, name, currentPage, setCurrentPage}) => {

  

  return (
    <li  >
    <Link to={linkTo} onClick={() => setCurrentPage(name)} className={`${currentPage === name ? "btn active" : "btn"}`}>{name}</Link>
  </li>
  )
}

export default NavLink