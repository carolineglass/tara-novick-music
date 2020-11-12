import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.divContainer}>

            <h1>
                <Link className={headerStyles.name} to="/">
                    {data.site.siteMetadata.title}
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
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeNavItem} to="/projects">
                            Projects /
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
            </div>

        </header>
    )
}

export default Header