import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Tara</h1>
            <p><Link to="/contact">Let's work together</Link></p>
            <p>Bio</p>
            <p>Quote</p>
        </Layout>
    )
}

export default AboutPage