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
        <footer>
            <p style={{textAlign: "center", fontSize: "small", marginTop: "1rem", color: "black"}}> Site by {data.site.siteMetadata.author} © 2020</p>
        </footer>
    )
}

export default Footer