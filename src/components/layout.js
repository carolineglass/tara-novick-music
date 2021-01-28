import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import layoutStyles from './layout.module.scss'
import headerStyles from './header.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.content}>
            <Header />
                <div className={headerStyles.overlayMenu}>
                    <Link to="/">
                        HOME
                    </Link>
                    <Link to="/about">
                        ABOUT
                    </Link>
                    <Link to="/projects">
                        PROJECTS
                    </Link>
                    <Link to="/music">
                        MUSIC
                    </Link>
                    <Link to="/contact">
                        CONTACT
                    </Link>
                </div>
            {props.children}
        </div>
    )
}

export default Layout