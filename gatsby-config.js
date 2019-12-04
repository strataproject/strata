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
    //   resolve: `gatsby-plugin-segment-js`,
    //   options: {
    //     // your segment write key for your production environment
    //     // when process.env.NODE_ENV === 'production'
    //     // required; non-empty string
    //     prodKey: ``,

    //     // if you have a development env for your segment account, paste that key here
    //     // when process.env.NODE_ENV === 'development'
    //     // optional; non-empty string
    //     //devKey: `SEGMENT_DEV_WRITE_KEY`,

    //     // whether you want to include analytics.page()
    //     // optional; boolean that defaults to true
    //     // if false, then don't forget to manually add it to your codebase manually!
    //     trackPage: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 8008,
        production: false,
      },
    },
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
    // FIXME waiting on config
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     // Defaults to null
    //     defaultDataLayer: { platform: 'gatsby' },

    //     // Specify optional GTM environment details.
    //     gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
    //     gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
    //     dataLayerName: 'YOUR_DATA_LAYER_NAME',
    //   },
    // },
  ],
}
