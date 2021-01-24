import React from 'react'
import Header from './header'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.content}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout