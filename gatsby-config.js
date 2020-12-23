const path = require(`path`)


module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    author: `sugiono 2021`,
    description:`web blog sugeng`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}