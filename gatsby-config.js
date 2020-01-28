require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `5f1b3c52b92ebb58ab64188951c920`
      }
    }
  ]
};
