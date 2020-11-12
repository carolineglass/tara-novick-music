import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import AboutImg from '../images/tara-about.png'
import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
        <div className={aboutStyles.container}>
            <div className={aboutStyles.imgContainer}>
                <img src={AboutImg} className={aboutStyles.img}></img> 
            </div>
            <div className={aboutStyles.aboutText}>
                <p>Tara Novick was conceived during an acid trip in Big Sur at the end of the 1960’s, 
                a fitting start to a life in rock and roll. 
                His early childhood years were then spent vagabonding with his parents in 
                Europe and Northern Africa, and in Marakesh, Morrocco, at age four, Tara got his first 
                instrument, a three-stringed berber guitar with a goat-skinned body.</p>

                <p>The family eventually moved back to the United States, to Southern California, 
                and when Tara was ten his dad gave him his first acoustic guitar, a 1950’s Gibson.</p>

                <p>The first song Tara then learned to play was Ray Charles’ 
                “What I Say” and he was hooked! Soon thereafter, Tara started writing his own 
                songs and had his first band at age twelve, Toxic Four (comprised of three neighborhood 
                girls and Tara). They used a wheelbarrow to get to local gigs, playing for chips and Coca Cola.</p>

                <p style={{textAlign: "center"}}><Link to="/contact">Contact Me</Link></p>
            </div>
        </div>
        </Layout>
    )
}

export default AboutPage