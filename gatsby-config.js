const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    //`gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // plugins: [
        //   {
        //     resolve: 'gatsby-remark-find-replace',
        //     options: {
        //       // List your find and replace values. Both values must be strings.
        //       // This is required.
        //       replacements: {
        //         COMPANY: 'My Company',
        //         COPYRIGHT: `Copyright ${new Date().getFullYear()} My Company`,
        //       },

        //       // By default, find values are prefixed to reduce the chances of
        //       // conflicting with real content. You can change the prefix here.
        //       // Set to `false` to disable the prefix.
        //       prefix: '%',
        //     },
        //   },
        // ]
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `qmCYUZRPyefuavTpeLq3a0hDCRON53g1`,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        //devKey: `SEGMENT_DEV_WRITE_KEY`,

        // whether you want to include analytics.page()
        // optional; boolean that defaults to true
        // if false, then don't forget to manually add it to your codebase manually!
        trackPage: true,
      },
    },
    
  ],
}
