import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <header>
            <h1><Link to="/" style={{textDecoration: 'none', color: '#5E747F', fontSize: '80px'}}>Tara Novick</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Footer