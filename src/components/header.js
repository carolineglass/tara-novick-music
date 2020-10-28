import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <h1><Link className={headerStyles.name} to="/">Tara Novick</Link></h1>
            <nav>
                <ul className={headerStyles.ul}>
                    <li><Link className={headerStyles.link} to="/music">Music</Link></li>
                    <li><Link className={headerStyles.link} to="/gallery">Gallery</Link></li>
                    <li><Link className={headerStyles.link} to="/about">About</Link></li>
                    <li><Link className={headerStyles.link} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header