const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Robert Battaglia | Software Engineer',
    description:
      "Robert Battaglia's Personal Website - Blog, Skills, Portfolio, Contact Form and Social Links",
    author: 'Robert Battaglia',
    keywords: 'Robert,Battaglia,Full,Stack,Engineer,Javascript,Python,Contact',
    image: 'https://com-robertbattaglia.s3.amazonaws.com/ogimage.jpeg',
    twitterUsername: '@r0bertoB',
    domain: 'robertbattaglia.com',
  },
  plugins: [
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'Images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: path.join(__dirname, 'src', 'utils', 'typography'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3fe7xd8j9mna',
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        srcPath: path.resolve(__dirname, 'src'),
      },
    },
  ],
}
