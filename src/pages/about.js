import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import AboutImg from '../images/tara-about.png'
import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <h3>About Tara</h3>
            <div className={aboutStyles.container}>
                {/*<div className={aboutStyles.imgContainer}>
                    <img src={AboutImg} className={aboutStyles.img} alt="tara in concert"></img> 
        </div>*/}
                <div className={aboutStyles.aboutText}>
                    <p>Tara Novick was conceived during an acid trip in Big Sur at the end of the 1960’s, a fitting start to a life in rock and roll.
                    His early childhood years were then spent vagabonding with his parents in Europe and Northern Africa, and in Marakesh, Morrocco, at age four, Tara got his first instrument, a three- stringed berber guitar.
                    The family eventually moved back to Southern California, and when Tara was ten his dad gave him his first acoustic guitar, a 1950’s Gibson.
                    The first song Tara then learned to play was Ray Charles’ “What I Say” and he was hooked! Soon thereafter, Tara started writing his own songs and had his first band at age twelve, Toxic Four (comprised of three neighborhood girls and Tara). They used a wheelbarrow to get to local gigs, playing for chips and Coca Cola.
                    At thirteen, Tara found an 8-track tape that changed his life, “Matchbox” by Carl Perkins, and he became obsessed with rockabilly, going to record stores and spending all his allowance on records, including Eddie Cochran, Gene Vincent, Johnny Burnette, Elvis, Buddy Holly, and anything on Sun records.
                    He came to love everything 1950’s and by age sixteen, Tara was living by himself in an old Airstream in Malibu, had a full-on pompadour, and drove a ’57 Chevy.
                    A few years later, Tara emerged from the L.A. punk and rockabilly scene, and in 1989, he was a founding member of Royal Crown Review, which helped pioneer the neo-swing revival.
                    In 1992, he played lead guitar for El Vez (the self-proclaimed Mexican Elvis), and two
                    years later joined west coast punk band Youth Brigade. In 1996, he formed his own band The Voodoo Boys. From 2000 to 2005 Novick played lead guitar, co-wrote, recorded four albums, and toured the world with Lee Rocker of the Stray Cats.
                    He’s also toured and been the lead-guitarist for Slim Jim Phantom and the John Corbett Band, for whom he produced the 2006 Billboard hit single, “Good to Go,” He then toured with the Corbett band for the next ten years.
                    Over the course of his touring career, Tara fulfilled one of his childhood dreams when he went on the road with one of his heroes—Elvis’s former guitar player, Scotty Moore. Tara remembers the night he was sitting with Scotty, jamming and drinking whiskey, when Scotty got a phone call with the news that the founder of Sun Records, Sam Philips, had died. Tara and Scotty remained good friends.
                    Tara has also shared the stage with the likes of ZZ Top, Billy Idol, Keith Urban, Carrie Underwood, Rascal Flats, Brian Setzer, and Little Big Town, among others.
                    Tara’s extensive solo work includes three albums, “Tomorrow,” “Six Pack and Smokes” and The unreleased “Bamboozled.” produced by Grammy Award winning producer Jim Scott who is quoted as saying “Tara Novick has written and
                    recorded this years coolest Album. Songs about Love, Dangerous nights on lonely roads, Secret hiding places, and Religion intertwine magically with
                    acoustic guitars, mandolin, violin, double bass and Tara's timeless voice.
                    Its a Folk, Rock, Country, Rhythm and Bluegrass record that I love.”
                    When he plays he channels his love of music that started all those years ago with that Berber guitar.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage