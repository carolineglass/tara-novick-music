import React from 'react'
import Layout from '../components/layout'
import contactStyles from '../styles/contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Let's work together</h1>
                {/*<p><a href="https://www.facebook.com/taranovickmusic/" target="_blank">facebook</a></p>*/}
                <div>
                <div className={contactStyles.imgContainer}>
                    <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/40370434_1902539319802310_5645435756961857536_n.jpg?_nc_cat=110&ccb=2&_nc_sid=a26aad&_nc_ohc=vsWhSAoM2c8AX8J0YNB&_nc_ht=scontent-lga3-2.xx&oh=20aeeb8f4d3e4912767896f0719fecfb&oe=5FC1F20D"></img>
                    <p className={contactStyles.centeredText}>GIGS</p>
                </div>
                <div className={contactStyles.imgContainer}>
                    <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/86633262_2787373414652225_8001105184287621120_o.jpg?_nc_cat=103&ccb=2&_nc_sid=a26aad&_nc_ohc=YB5-zmiSZC8AX-0K0zb&_nc_ht=scontent-lga3-2.xx&oh=597912be2514984c1f5a7d62d154bf0a&oe=5FC29683"></img>
                    <p className={contactStyles.centeredText}>COMMERCIAL</p>
                </div>
                </div>
        </Layout>
    )
}

export default ContactPage