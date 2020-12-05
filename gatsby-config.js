/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Etomal`,
    description: `Thibaud Lamothe's website. Datascientist @ Intermarché. Scraping Lover. Welcome to my world.`,
    author: `@thibaud-lamothe`,
    mail: `hello@etomal.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `etomal`,
        start_url: `/`,
        background_color: `#7c5332`,
        theme_color: `#7c5332`,
        display: `minimal-ui`,
        icon: `src/images/etomal.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
