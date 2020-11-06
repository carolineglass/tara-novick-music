import React from 'react'
import Layout from '../components/layout'
import TaraImg from '../images/tara-main.jpeg'
import homeStyles from '../styles/homepage.module.scss'

const IndexPage = () => {
  return (
      <Layout>
        <div className={homeStyles.homeDiv}>
          <img src={TaraImg} alt="photo of tara"></img>
          <div className={homeStyles.content}>
          <h1 className={homeStyles.name}>TARA NOVICK</h1>
            <div className={homeStyles.quote}>
              <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque 
              eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
              Integer tincidunt."</p>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage