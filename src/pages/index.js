import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>
          <h1>TARA NOVICK</h1>
          <p>Musician/Composer</p>
          {/*<img src={TaraImg}></img>*/}
        </div>
      </Layout>
  )
}

export default IndexPage