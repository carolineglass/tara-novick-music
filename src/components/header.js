import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //       site {
    //         siteMetadata {
    //           title
    //         }
    //       }
    //     }
    // `)
    return (
        <header>
            <div className={headerStyles.divContainer}>

            <h1>
                <Link className={headerStyles.name} to="/">
                    Tara Novick
                </Link>
            </h1>

            <nav className={headerStyles.nav}>
                <ul className={headerStyles.ul}>
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