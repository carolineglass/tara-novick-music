import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>

          <div className={homeStyles.imgContainer}>
            <img src={TaraImg} alt="tara with guitar"></img>
          </div>

          <div className={homeStyles.content}>
            <h1 className={homeStyles.name}>TARA NOVICK</h1>
              <p className={homeStyles.titles}>Guitarist / Composer / Songwriter / Producer</p>
            <div className={homeStyles.quote}>
              <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque 
              eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
              Integer tincidunt."</p>
            </div>
            <Link className={homeStyles.link} to="/projects">Check out my recent projects</Link>
          </div>

        </div>
      </Layout>
  )
}

export default IndexPage