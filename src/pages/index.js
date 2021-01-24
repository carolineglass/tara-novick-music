import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>
          <div className={homeStyles.contentDiv}>
            <p>GUITARIST</p>
            <p>COMPOSER</p>
            <p>SONGWRITER</p>
            <p>PRODUCER</p>
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage