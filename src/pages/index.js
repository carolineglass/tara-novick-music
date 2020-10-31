import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={homeStyles.homeDiv}>
        <img src={TaraImg}></img>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage