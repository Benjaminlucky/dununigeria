import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import navLogo from '../images/dunuLogo.png'
import {MdOutlineClose} from 'react-icons/md'


export default function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false)


  return (
    <div className="main__nav-con nav-container">
       <div className="nav__logo">
            <Link to="/" onClick={ () => setIsNavShowing(prev => !prev)} className='nav-logo'>
                <img src={navLogo} alt="Dunu Logo" />
            </Link>
       </div>

        <div className="nav__menu">
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} style={({isActive})=>({ color: isActive ? "var(--color-secondary)": '', fontWeight: isActive ? 600 : "" })}
                                onClick={ () => setIsNavShowing(prev => !prev) } >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
            {
                isNavShowing ? <MdOutlineClose /> : <FaBars />
            }
        </button>
    </div>
  )
}
 