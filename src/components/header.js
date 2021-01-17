import React, {useState} from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import responsiveStyles from './layout.module.scss';

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header>
            <div className={headerStyles.divContainer}>

            <h1>
                <Link className={headerStyles.name} to="/">
                    Tara Novick
                </Link>
            </h1>

            <nav className={headerStyles.nav}>

                <a onClick={() => {setOpen(!open)}} href="#" className={`${responsiveStyles.hideForDesktop} ${headerStyles.hamburger} ${headerStyles.openHamburger}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <ul className={`${responsiveStyles.hideForMobile} ${headerStyles.ul}`}>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/music">
                            MUSIC
                        </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header