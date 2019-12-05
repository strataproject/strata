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
          failOnError: false,
        },
      },
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
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 8008,
    //     production: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        // your cookiehub widget ID
        cookihubId: `39d4302a`,
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/overlay-icon-1500-circle.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: 'A new data platform for sustainable finance',
        developerName: 'Stef Lewandowski',
        developerURL: 'https://stef.io',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PK2FGRP',
      },
    },
  ],
}
