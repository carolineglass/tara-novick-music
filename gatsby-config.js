/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = { 
  siteMetadata: {
    title: 'TARA NOVICK',
    author: 'Caroline Glass'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`,
          `East Sea Dokdo`,
        ],
      display: 'swap',
      },
    },
  ],
}
