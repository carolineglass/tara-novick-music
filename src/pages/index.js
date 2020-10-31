import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={homeStyles.homeDiv}>
        <h1>Tara Novick</h1>
        <img src={TaraImg}></img>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage