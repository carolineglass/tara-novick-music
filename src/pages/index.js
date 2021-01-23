import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>

          {/*<div className={homeStyles.imgContainer}>
              <img src={TaraImg} alt="tara with guitar"></img>
          </div>*/}

          <div className={homeStyles.content}>
            <h1 className={homeStyles.name}>Tara Novick</h1>
              <p className={homeStyles.titles}>Guitarist / Composer / Songwriter / Producer</p>
            <Link className={homeStyles.link} to="/projects">Check out my recent projects</Link>
          </div>

        </div>
      </Layout>
  )
}

export default IndexPage