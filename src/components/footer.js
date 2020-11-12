import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
                author
            }
          }
        }
    `)

    return (
        <footer style={{border: "solid black"}}>
            <p style={{textAlign: "center", fontSize: "small", marginTop: "1rem", color: "black"}}> Created by {data.site.siteMetadata.author} © 2020</p>
        </footer>
    )
}

export default Footer