import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.name} to="/">
                    Tara Novick
                </Link>
            </h1>

            <nav className={headerStyles.nav}>
                <ul className={headerStyles.ul}>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/">
                            Home /
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/about">
                            About /
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/gallery">
                            Work /
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/music">
                            Music /
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header