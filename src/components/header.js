import React, {useState} from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import responsiveStyles from './layout.module.scss';

const Header = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const handleHamburgerClick = (e) => {
        setHamburgerOpen(!hamburgerOpen)
    }
 
    return (

        <header>
            <div className={headerStyles.divContainer}>

            <h1>
                <Link className={ `${headerStyles.name} ${responsiveStyles.name}`} to="/">
                TARA NOVICK
                </Link>
            </h1>

            <nav className={headerStyles.nav}>
            
                <div className={ hamburgerOpen ? `${responsiveStyles.hideForDesktop} ${headerStyles.overlay} ${headerStyles.overlayOpen}` : `${responsiveStyles.hideForDesktop} ${headerStyles.overlay} ${headerStyles.fadeOut}`}>

                </div>


                <a onClick={handleHamburgerClick} href="#" 
                className={ hamburgerOpen ? `${responsiveStyles.hideForDesktop} ${headerStyles.hamburger} ${headerStyles.openHamburger}` : `${responsiveStyles.hideForDesktop} ${headerStyles.hamburger}`}>
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