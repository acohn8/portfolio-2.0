require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Adam Cohn: Web Developer',
    description:
      "I'm Adam Cohn, a full-stack web developer in Washington, D.C., making applications with React and Ruby on Rails.",
    author: 'Adam Cohn',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'portfolio-site-ac',
        accessToken:
          'MC5YQ3BRMHhFQUFDc0FvVXNK.77-977-977-977-9ce-_vTDvv71GSu-_vQ1iXO-_ve-_vUvvv71i77-9fHrvv70C77-977-9fe-_ve-_ve-_vQjvv70',
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
