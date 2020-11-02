import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'

import Header from '../components/header'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>
          <h1><span>TARA</span> NOVICK</h1>
          <p>Guitarist</p>
          <p>Composer</p>
          <p>Songwriter</p>
          <p>Producer</p>
          {/*<img src={TaraImg}></img>*/}
        </div>
      </Layout>
  )
}

export default IndexPage